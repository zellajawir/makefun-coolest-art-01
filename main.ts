import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
// Resolve beside this module so a different working directory also works.
const artwork = new URL('./submission.jpg', import.meta.url);
copyFileSync(artwork, join(outputDir, 'entry.png'));
