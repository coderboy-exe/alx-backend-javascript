const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET') {
    if (url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!');
    } else if (url === '/students') {
      res.statusCode = 200;
      res.setHeader('content-Type', 'text/plain');

      countStudents(process.argv[2])
        .then((result) => {
          res.end(`This is the list of our students\n${result}`);
        })
        .catch((error) => {
          res.statusCode = 404;
          res.end(`Cannot load the database`);
        });
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Cannot load the database');
    }
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
