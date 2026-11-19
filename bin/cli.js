#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKILL_NAME = "frontend-design-engineering";
const CONTENT_DIRS = ["references", "recipes", "stacks", "workflows", "scripts"];
const AGENTS = {
  codex: ".agents/skills",
  claude: ".claude/skills",
  cursor: ".cursor/skills",
  windsurf: ".windsurf/skills",
  copilot: ".github/skills",
};
const VERSION = "0.1.0";

function usage() {
  console.log(`
PStacks Frontend Design Engineering Skill ${VERSION}

Usage:
  npx pstack-frontend-design-skill [install] [options]
  npx pstack-frontend-design-skill update [options]
  npx pstack-frontend-design-skill doctor [options]

Commands:
  install           Install the skill (default command)
  update            Update installed copies using this package version
  doctor            Show which supported agents have the skill installed
  help              Show this help

Options:
  --agent <name>    codex | claude | cursor | windsurf | copilot
  --all             Install into every supported agent location
  --force            Replace existing skill files without prompting
  --help, -h         Show help

Examples:
  npx pstack-frontend-design-skill
  npx pstack-frontend-design-skill install --agent codex
  npx pstack-frontend-design-skill install --all
  npx pstack-frontend-design-skill update
  npx pstack-frontend-design-skill doctor
`);
}

function parseArgs(args) {
  const parsed = { command: "install", agent: null, all: false, force: false };
  let index = 0;
  if (args[0] && !args[0].startsWith("-")) {
    parsed.command = args[0];
    index = 1;
  }
  for (; index < args.length; index++) {
    const arg = args[index];
    if (arg === "--agent") {
      parsed.agent = args[++index];
      if (!parsed.agent) throw new Error("--agent requires a name.");
    } else if (arg === "--all") parsed.all = true;
    else if (arg === "--force") parsed.force = true;
    else if (arg === "--help" || arg === "-h") parsed.command = "help";
    else throw new Error(`Unknown option: ${arg}`);
  }
  if (parsed.agent && !Object.hasOwn(AGENTS, parsed.agent)) {
    throw new Error(`Unsupported agent "${parsed.agent}". Choose: ${Object.keys(AGENTS).join(", ")}`);
  }
  if (parsed.agent && parsed.all) throw new Error("Use either --agent or --all, not both.");
  return parsed;
}

function filesToInstall() {
  const list = ["SKILL.md"];
  for (const directory of CONTENT_DIRS) {
    const absolute = path.join(ROOT, directory);
    if (fs.existsSync(absolute)) walk(absolute, directory, list);
  }
  return list;
}

function walk(absoluteDir, relativeDir, list) {
  for (const entry of fs.readdirSync(absoluteDir, { withFileTypes: true })) {
    const abs = path.join(absoluteDir, entry.name);
    const rel = path.join(relativeDir, entry.name);
    if (entry.isDirectory()) walk(abs, rel, list);
    else if (entry.isFile()) list.push(rel);
  }
}

function promptYesNo(question) {
  if (!process.stdin.isTTY) return Promise.resolve(false);
  return new Promise((resolve) => {
    process.stdout.write(question + " [y/N] ");
    process.stdin.once("data", (data) => {
      resolve(/^y(es)?$/i.test(String(data).trim()));
    });
  });
}

function selectedAgents(options, updateMode = false) {
  if (options.all) return Object.keys(AGENTS);
  if (options.agent) return [options.agent];
  if (updateMode) {
    return Object.keys(AGENTS).filter((name) =>
      fs.existsSync(path.join(process.cwd(), AGENTS[name], SKILL_NAME))
    );
  }
  return ["codex"];
}

async function installFor(agent, files, options, updateMode) {
  const destination = path.join(process.cwd(), AGENTS[agent], SKILL_NAME);
  const exists = fs.existsSync(destination);
  if (exists && !options.force && !updateMode) {
    const ok = await promptYesNo(`Skill already exists at ${path.relative(process.cwd(), destination)}. Replace/update its files?`);
    if (!ok) {
      console.log(`Skipped ${agent} (existing files left untouched).`);
      return false;
    }
  }
  fs.mkdirSync(destination, { recursive: true });
  let written = 0;
  for (const relative of files) {
    const source = path.join(ROOT, relative);
    const target = path.join(destination, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    if (fs.existsSync(target) && !options.force && !updateMode && !exists) {
      // Unusual nested collision: do not overwrite a file that appeared after the directory check.
      console.warn(`Skipped existing file: ${target}`);
      continue;
    }
    fs.copyFileSync(source, target);
    written++;
  }
  console.log(`Installed ${SKILL_NAME} for ${agent} → ${path.relative(process.cwd(), destination)} (${written} files)`);
  return true;
}

function doctor() {
  console.log("PStacks Frontend Design Engineering Skill — installation check\n");
  for (const [agent, base] of Object.entries(AGENTS)) {
    const target = path.join(process.cwd(), base, SKILL_NAME);
    const installed = fs.existsSync(path.join(target, "SKILL.md"));
    console.log(`${installed ? "✓" : "–"} ${agent.padEnd(9)} ${installed ? path.relative(process.cwd(), target) : "not installed"}`);
  }
}

async function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
    return;
  }
  if (options.command === "help") return usage();
  if (options.command === "doctor") return doctor();
  if (!["install", "update"].includes(options.command)) {
    console.error(`Unknown command: ${options.command}\n`);
    usage();
    process.exitCode = 1;
    return;
  }

  const updateMode = options.command === "update";
  const targets = selectedAgents(options, updateMode);
  if (updateMode && targets.length === 0) {
    console.log("No installed copies detected. Run install first (defaults to Codex).");
    return;
  }
  const files = filesToInstall();
  if (options.all && updateMode) console.log("Updating all supported agent locations.");
  else if (updateMode && !options.agent) console.log("Updating detected installations.");
  for (const agent of targets) await installFor(agent, files, options, updateMode);
  console.log("\nDone. Use the skill from your AI coding agent in the project.");
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
