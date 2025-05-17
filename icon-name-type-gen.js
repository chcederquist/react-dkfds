/* eslint-disable */
const fs = require('fs');
const path = require('path');

// Navigate to the directory where the SVG icons are stored
const pathToIcons = path.resolve(__dirname, './node_modules/dkfds/src/img/svg-icons/');
const filenames = fs.readdirSync(pathToIcons);
// Remove .svg-ending of file-name
const iconNames = filenames.map((filename) => {
  const name = filename.replace(/\.svg$/, '');
  return name;
});

// Write filenames to icon-names.ts
const iconNamesPath = path.resolve(__dirname, './src/types/icon-names.ts');
fs.writeFileSync(
  iconNamesPath,
  `// This file is auto-generated. Do not edit manually.\n\nexport type IconName =\n${iconNames
    .map((name) => `  | "${name}"`)
    .join('\n')};\n`
);
