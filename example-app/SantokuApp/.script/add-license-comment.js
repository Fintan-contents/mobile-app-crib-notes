const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const targetDir = path.join(rootDir, 'src');

const excludes = [
  path.join(targetDir, 'features/demo-instructions/pages/InstructionsPage.tsx'),
  path.join(targetDir, 'bases/ui/barcode/Barcode.tsx'),
  path.join(targetDir, 'bases/core/errors/ErrorWrapper.ts'),
  path.join(targetDir, 'features/backend/apis'),
  path.join(targetDir, 'features/sandbox/apis'),
];

const licenseComment = `/**
 * Copyright ${new Date().getFullYear()} TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */`;

const addLicenseToFiles = directory => {
  // withFileTypesとrecursiveの両方を有効にすると、取得するファイルが欠落する問題があるため、recursiveは指定しない
  // https://github.com/nodejs/node/issues/48858
  const files = fs.readdirSync(directory, {withFileTypes: true});
  files.forEach(file => {
    const filePath = path.join(directory, file.name);
    const found = excludes.find(f => filePath.startsWith(f));
    if (found) {
      return;
    }
    if (file.isDirectory()) {
      addLicenseToFiles(filePath);
      return;
    }
    if (file.name.endsWith('.js') || file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
      try {
        const data = fs.readFileSync(filePath, 'utf-8');
        if (!data.toString('utf-8').match(/Copyright \d{4} TIS Inc./)) {
          const commentWithContent = licenseComment + '\n\n' + data;
          fs.writeFileSync(filePath, commentWithContent);
        }
      } catch (error) {
        console.error(`Error occurred while processing the file ${filePath}: ${error.message}`);
      }
    }
  });
};

addLicenseToFiles(targetDir);
