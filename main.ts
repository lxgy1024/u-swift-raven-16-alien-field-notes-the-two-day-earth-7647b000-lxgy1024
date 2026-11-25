import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Two-day trip to Earth: the locals worship glowing rectangles, queue for bitter bean water, and argue about weather they cannot control. Sunsets five stars, traffic one. Would abduct again. ★★★☆☆";

// The entry must be plain text of 1 to 200 characters.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
