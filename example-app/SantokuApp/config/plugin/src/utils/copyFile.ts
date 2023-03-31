import fs from 'fs';

export function copyFile(src: string, dest: string) {
  try {
    fs.copyFileSync(src, dest);
  } catch (e) {
    throw new Error(`Cannot copy ${src}. ${String(e)}.`);
  }
}
