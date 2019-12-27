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
export const copyFile = (source: string, destination: string): NodeJS.ErrnoException | void => {
  const sourceFile = path.join(__dirname, source);
  const destinationFile = path.join(__dirname, destination);
  return fs.copyFile(
    sourceFile,
    destinationFile,
    (error: NodeJS.ErrnoException | null): NodeJS.ErrnoException | void => {
      if (error) throw error;
    }
  );
};

export default copyFile;
