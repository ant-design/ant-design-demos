import fs from 'fs';
import path from 'path';
import * as glob from 'glob';
import * as rimraf from 'rimraf';

const demoFiles: string[] = glob.globSync(
  path.join(
    process.cwd(),
    'ant-design/components/*/demo/*.tsx',
  ),
);

// Clear demo/ dir
rimraf.sync(path.join(process.cwd(), 'demos'));
fs.mkdirSync(path.join(process.cwd(), 'demos'));

demoFiles.forEach((file) => {
  // Move demo into demos/ dir
  const paths = file.split('/');
  const component = file.split('/')[paths.length - 3];
  const demoName = file.split('/')[paths.length - 1];
  if (!fs.existsSync(path.join(process.cwd(), 'demos', component))) {
    fs.mkdirSync(path.join(process.cwd(), 'demos', component));
  }
  const newFilePath = path.join(process.cwd(), 'demos', component, demoName);
  fs.copyFileSync(file, newFilePath);
});
