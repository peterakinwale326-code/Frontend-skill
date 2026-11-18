#!/usr/bin/env node
/**
 * Lightweight browser QA for a running web application.
 *
 * Usage:
 *   node scripts/audit-browser.mjs http://localhost:3000
 *   node scripts/audit-browser.mjs http://localhost:3000 --routes=/,/dashboard,/settings
 *   node scripts/audit-browser.mjs https://staging.example.com --out=artifacts/ui-audit
 *
 * Optional project dependencies:
 *   npm install -D playwright @axe-core/playwright
 *   npx playwright install chromium
 *
 * This is a heuristic QA aid, not a complete accessibility or visual-design audit.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const baseUrl = args.find((arg) => !arg.startsWith("--"));
if (!baseUrl) {
  console.error("Usage: node scripts/audit-browser.mjs <base-url> [--routes=/,/dashboard] [--out=artifacts/ui-audit]");
  process.exit(2);
}

const option = (name, fallback) => {
  const item = args.find((arg) => arg.startsWith(`--${name}=`));
  return item ? item.slice(name.length + 3) : fallback;
};
const routes = option("routes", "/").split(",").map((route) => route.trim()).filter(Boolean);
const outputDir = option("out", "artifacts/ui-audit");
const viewports = [
  { name: "mobile-360", width: 360, height: 800 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1280", width: 1280, height: 900 },
  { name: "wide-1440", width: 1440, height: 1000 },
];

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("Missing Playwright. Install it in the target project: npm install -D playwright && npx playwright install chromium");
  process.exit(2);
}

let AxeBuilder = null;
try {
  ({ default: AxeBuilder } = await import("@axe-core/playwright"));
} catch {
  console.warn("Optional @axe-core/playwright not found; automated axe checks will be skipped.");
}

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const report = {
  baseUrl,
  generatedAt: new Date().toISOString(),
  viewports,
  axeAvailable: Boolean(AxeBuilder),
  results: [],
};

const safeName = (value) => value.replace(/[^a-z0-9_-]+/gi, "-").replace(/^-|-$/g, "") || "route";

try {
  for (const route of routes) {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
      const consoleErrors = [];
      const pageErrors = [];
      const failedRequests = [];

      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("pageerror", (error) => pageErrors.push(error.message));
      page.on("requestfailed", (request) => {
        failedRequests.push({ url: request.url(), error: request.failure()?.errorText ?? "request failed" });
      });

      const result = {
        route,
        viewport: viewport.name,
        width: viewport.width,
        height: viewport.height,
        consoleErrors,
        pageErrors,
        failedRequests,
        axeViolations: [],
        axeError: null,
        navigationError: null,
        layout: null,
        unnamedControls: [],
        screenshot: null,
      };

      try {
        const target = new URL(route, baseUrl).toString();
        const response = await page.goto(target, { waitUntil: "domcontentloaded", timeout: 30000 });
        result.httpStatus = response?.status() ?? null;

        result.layout = await page.evaluate(() => {
          const root = document.documentElement;
          const body = document.body;
          const width = window.innerWidth;
          const candidates = [...document.querySelectorAll("body *")].filter((element) => {
            const rect = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            return rect.width > 0 && rect.height > 0 &&
              rect.right > width + 2 &&
              style.position !== "fixed" &&
              style.position !== "absolute";
          }).slice(0, 20).map((element) => ({
            tag: element.tagName.toLowerCase(),
            className: typeof element.className === "string" ? element.className.slice(0, 120) : "",
            right: Math.round(element.getBoundingClientRect().right),
          }));

          const controls = [...document.querySelectorAll("button, a[href], input:not([type=hidden]), select, textarea")];
          const unnamed = controls.filter((element) => {
            const labelledBy = element.getAttribute("aria-labelledby");
            const labelledByText = labelledBy
              ? labelledBy.split(/\\s+/).map((id) => document.getElementById(id)?.textContent ?? "").join(" ").trim()
              : "";
            const label = element.labels ? [...element.labels].map((item) => item.textContent ?? "").join(" ").trim() : "";
            const name = element.getAttribute("aria-label") ||
              labelledByText ||
              label ||
              element.getAttribute("title") ||
              [...element.querySelectorAll("img[alt]")].map((img) => img.getAttribute("alt") ?? "").join(" ").trim() ||
              element.value ||
              element.textContent?.trim();
            return !name;
          }).slice(0, 30).map((element) => ({
            tag: element.tagName.toLowerCase(),
            type: element.getAttribute("type"),
            id: element.id,
            className: typeof element.className === "string" ? element.className.slice(0, 120) : "",
          }));

          return {
            viewportWidth: width,
            documentWidth: Math.max(root.scrollWidth, body?.scrollWidth ?? 0),
            horizontalOverflow: Math.max(root.scrollWidth, body?.scrollWidth ?? 0) > width + 1,
            likelyOverflowingElements: candidates,
            unnamedControls: unnamed,
          };
        });
        result.unnamedControls = result.layout.unnamedControls;

        if (AxeBuilder) {
          try {
            const axe = await new AxeBuilder({ page })
              .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
              .analyze();
            result.axeViolations = axe.violations.map((violation) => ({
              id: violation.id,
              impact: violation.impact,
              description: violation.description,
              help: violation.help,
              helpUrl: violation.helpUrl,
              nodes: violation.nodes.slice(0, 10).map((node) => ({
                target: node.target,
                summary: node.failureSummary,
              })),
            }));
          } catch (error) {
            result.axeError = error.message;
          }
        }

        const screenshotName = `${safeName(route)}-${viewport.name}.png`;
        const screenshotPath = path.join(outputDir, screenshotName);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        result.screenshot = screenshotPath;
      } catch (error) {
        result.navigationError = error.message;
      }

      report.results.push(result);
      await page.close();
      console.log(`[audit] ${route} @ ${viewport.name}: ${result.navigationError ? "FAILED" : "captured"}`);
    }
  }
} finally {
  await browser.close();
}

const reportPath = path.join(outputDir, "report.json");
await writeFile(reportPath, JSON.stringify(report, null, 2) + "\\n", "utf8");

const failed = report.results.filter((result) =>
  result.navigationError ||
  result.httpStatus >= 400 ||
  result.pageErrors.length > 0 ||
  result.layout?.horizontalOverflow ||
  result.unnamedControls.length > 0 ||
  result.axeViolations.length > 0
).length;

console.log(`\\nReport: ${reportPath}`);
console.log(`Routes: ${routes.length} | Viewports: ${viewports.length} | Findings on: ${failed} capture(s)`);
console.log("Review screenshots and report.json manually. A clean report does not prove visual quality or WCAG conformance.");
if (failed > 0) process.exitCode = 1;
