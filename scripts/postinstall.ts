import fs from 'fs';
import copyFile from './copyFile';

/**
 * Post-install script
 *
 * Runs after `npm install`.
 */
const basePath = '../';
const envFile = '.env';
const exampleFile = '.env.example';

if (!fs.existsSync(basePath + envFile)) {
  copyFile(basePath + exampleFile, basePath + envFile);
}
