import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CLI = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../bin/cli.js");

function run(args, cwd) {
  return spawnSync(process.execPath, [CLI, ...args], { cwd, encoding: "utf8" });
}

test("help prints usage and exits cleanly", () => {
  const result = run(["help"], process.cwd());
  assert.equal(result.status, 0);
  assert.match(result.stdout, /Usage:/);
  assert.match(result.stdout, /--all/);
});

test("install for Codex creates the skill and keeps folder structure", () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "pstack-skill-test-"));
  try {
    const result = run(["install", "--agent", "codex", "--force"], temp);
    assert.equal(result.status, 0, result.stderr);
    const target = path.join(temp, ".agents/skills/frontend-design-engineering");
    assert.ok(fs.existsSync(path.join(target, "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "references/accessibility.md")));
    assert.ok(fs.existsSync(path.join(target, "workflows/discovery-and-art-direction.md")));
    assert.ok(fs.existsSync(path.join(target, "scripts/audit-browser.mjs")));
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
});

test("doctor reports supported agent paths", () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "pstack-skill-doctor-"));
  try {
    const result = run(["doctor"], temp);
    assert.equal(result.status, 0);
    assert.match(result.stdout, /codex/);
    assert.match(result.stdout, /copilot/);
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
});
