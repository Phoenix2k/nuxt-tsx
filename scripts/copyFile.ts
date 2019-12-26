import fs from 'fs';
import path from 'path';

/**
 * Copy file
 *
 * Copies files from one place to another.
 *
 * @param {string} source Source file
 * @param {string} destination Destination file
 * @return {void}
 */
const copyFile = (source: string, destination: string): void => {
  const sourceFile = path.join(__dirname, source);
  const destinationFile = path.join(__dirname, destination);
  fs.copyFile(sourceFile, destinationFile, (error) => {
    if (error) throw error;
  });
};

export default copyFile;
