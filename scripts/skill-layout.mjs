import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export const skillReferenceName = /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;

export function skillFiles(folder) {
  const files = [];
  for (const entry of readdirSync(folder, { withFileTypes: true })) {
    if (entry.name === 'SKILL.md' && entry.isFile()) {
      files.push(entry.name);
    } else if (entry.name === 'references' && entry.isDirectory()) {
      for (const reference of readdirSync(join(folder, entry.name), { withFileTypes: true })) {
        if (!reference.isFile() || !skillReferenceName.test(reference.name)) {
          throw new Error('Referência deve ser um arquivo Markdown regular.');
        }
        files.push(`references/${reference.name}`);
      }
    } else {
      throw new Error('A skill aceita SKILL.md e referências Markdown.');
    }
  }
  return files.sort();
}
