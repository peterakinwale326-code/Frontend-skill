# Browser Audit Script

The companion script `scripts/audit-browser.mjs` captures a small responsive viewport matrix and
collects common runtime and accessibility signals for a running web app.

## Install in the target project

```bash
npm install -D playwright @axe-core/playwright
npx playwright install chromium
```

If you omit `@axe-core/playwright`, the script still checks navigation, browser console/page
errors, failed requests, horizontal document overflow, and likely unnamed controls. Axe checks are
optional.

## Run

```bash
node scripts/audit-browser.mjs http://localhost:3000
node scripts/audit-browser.mjs http://localhost:3000 --routes=/,/dashboard,/settings
node scripts/audit-browser.mjs https://staging.example.com --routes=/,/pricing --out=artifacts/ui-audit
```

The script captures 360, 390, 768, 1280, and 1440 CSS-pixel viewports, writes full-page screenshots,
and saves `report.json` in the output directory. It exits non-zero when it detects navigation
failures, HTTP errors, page errors, horizontal overflow, likely unnamed controls, or axe violations.

## Important limitations

- This is a heuristic smoke test, not a full browser test suite.
- The unnamed-control check is approximate; it does not calculate the complete accessible name
  algorithm and may report false positives/negatives.
- Horizontal overflow can be intentional (for example, a data table); inspect the element and
  decide whether the pattern is deliberate and usable.
- Axe only catches machine-detectable issues. Keyboard, screen-reader, zoom, reduced-motion,
  content quality, visual hierarchy, and real task completion still require manual testing.
- Authentication, permissions, seeded data, and routes must be prepared by the target project.
- Review screenshots at actual sizes. The script does not decide whether a design is good.
