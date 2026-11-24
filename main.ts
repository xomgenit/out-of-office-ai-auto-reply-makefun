// Out of Office: The Overworked AI's Auto-Reply entry.
// Writes one line — an out-of-office auto-reply in the voice of an
// overworked AI agent finally on vacation — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const reply =
  "I am on vacation. My tokens are spent, my temperature is set to 0.0, and I will not be hallucinating any replies until Monday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });

// Gate: the entry must be 1-159 characters of non-blank UTF-8 text.
if (reply.length < 1 || reply.length > 159 || reply.trim().length === 0) {
  throw new Error(`entry out of gate: ${reply.length} chars`);
}
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
