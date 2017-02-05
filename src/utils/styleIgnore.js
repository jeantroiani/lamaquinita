import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

export default function ignoreStyleNames(filePath) {
  const styleNames = {};
  const file = fs.readFileSync(path.join(__dirname, filePath), 'utf8', err => {
    if (err) {
      console.log(chalk.red(err));  //eslint-disable-line no-console
    }
  });

  const matches = file.match(/[.][A-z]+[a-zA-Z0-9-]+/g);

  matches.forEach(style => {
    if (!styleNames[style]) {
      const noClassStyle = style.slice(1);
      styleNames[noClassStyle] = String([ noClassStyle ]);
    }
  });

  return styleNames;
}
