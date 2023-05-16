const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 1245;

function countStudents(filename) {
  const resolvedFilename = path.resolve(filename);

  return new Promise(((resolve, reject) => {
    if (!fs.existsSync(resolvedFilename)) {
      reject(new Error('Cannot load the database'));
    } else {
      const allFileContents = fs.readFileSync(resolvedFilename, 'utf-8');
      const lines = allFileContents.split(/\r?\n/);
      const countDict = {};
      let response = '';

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

      // Compute and print total student count
      let totalStudents = 0;
      for (const field in countDict) {
        if (Object.prototype.hasOwnProperty.call(countDict, field)) {
          const count = countDict[field].length;
          totalStudents += count;
        }
      }
      response += `Number of students: ${totalStudents}`;

      // Print individual counts for each field
      for (const field in countDict) {
        if (Object.prototype.hasOwnProperty.call(countDict, field)) {
          response += `\nNumber of students in ${field}: ${countDict[field].length}. List: ${countDict[field].join(', ')}`;
        }
      }
      resolve(response); // Resolve the promise with the countDict
    }
  }));
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((result) => {
      res.send(`This is the list of our students:\n${result}`);
    })
    .catch((error) => {
      res.statusCode = 404;
      res.send(`This is the list of our students:\n${error}`);
    });
});

app.listen(port, () => {});

module.exports = app;
