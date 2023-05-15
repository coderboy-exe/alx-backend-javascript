const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');


function countStudents(filename) {
  const resolvedFilename = path.resolve(filename);

  if (!fs.existsSync(resolvedFilename)) {
    throw new Error('Cannot load the database');
  } else {
    exec(`wc -l ${resolvedFilename}`, function (error, results) {
    const lineCount = results.split(' ')[0];
    console.log(`Number of students: ${lineCount}`);
    });

    const allFileContents = fs.readFileSync(resolvedFilename, 'utf-8');
    const lines = allFileContents.split(/\r?\n/);
    const countDict = {};

    lines.forEach(line => {
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
    for (const field in countDict) {
      console.log(`Number of students in ${field}: ${countDict[field].length}. List: ${countDict[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
