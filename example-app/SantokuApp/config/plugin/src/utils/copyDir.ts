import {copySync} from 'fs-extra';

export function copyDir(src: string, dest: string) {
  try {
    copySync(src, dest);
  } catch (e) {
    throw new Error(`Cannot copy ${src}. ${String(e)}.`);
  }
}
