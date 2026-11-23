import { existsSync } from "node:fs";
import { join } from "node:path";

const EXTENSIONS = ["svg", "png", "webp", "jpg", "jpeg"];

/**
 * Finds a client logo in /public/clients by base name (e.g. "pda" -> "/clients/pda.png").
 * Runs at build time, so a logo shows up as soon as its file is added; returns null until then.
 * Server components only (it reads the file system).
 */
export function findLogo(base: string): string | null {
  for (const ext of EXTENSIONS) {
    if (existsSync(join(process.cwd(), "public", "clients", `${base}.${ext}`))) return `/clients/${base}.${ext}`;
  }
  return null;
}
