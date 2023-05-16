const path = require('path');
const fs = require('fs');

function countStudents(filename) {
  const resolvedFilename = path.resolve(filename);

  return new Promise(((resolve, reject) => {
    if (!fs.existsSync(resolvedFilename)) {
      reject(new Error('Cannot load the database'));
    } else {
      const allFileContents = fs.readFileSync(resolvedFilename, 'utf-8');
      const lines = allFileContents.split(/\r?\n/);
      const countDict = {};

      lines.forEach((line) => {
        const student = line.split(',');
        const firstname = student[0];
        const field = student[3];

        if (field === 'CS' || field === 'SWE') {
          if (field in countDict) {
            countDict[field].push(firstname);
          } else {
            countDict[field] = [firstname];
          }
        }
      });
      resolve(countDict); // Resolve the promise with the countDict
    }
  }));
}

module.exports = countStudents;
