const fs = require('fs');
const path = require('path');

// Define the input directory
const inputDirectory = './html';
const outputDirectory = './views'
// Read HTML files and rename them to EJS
fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.html')) {
      const oldFilePath = path.join(inputDirectory, file);
      const newFileName = file.replace('.html', '.ejs');
      const newFilePath = path.join(outputDirectory, newFileName);

      fs.rename(oldFilePath, newFilePath, (renameErr) => {
        if (renameErr) {
          console.error(`Error renaming ${file} to ${newFileName}:`, renameErr);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
    }
  });
});