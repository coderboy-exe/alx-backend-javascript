const http = require('http');

const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET') {
    if (url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!')
    } else if (url === '/students') {
      res.statusCode = 200;
      res.setHeader('content-Type', 'text/plain');

      countStudents(process.argv[2]).
        then((result) => {
          res.end(`This is the list of our students:\n${result}`)
        })
        .catch((error) => {
          res.statusCode = 404;
          res.end('Not Found')
	});
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found')
    }
  }
});

app.listen(port, hostname, () => {});

module.exports = app
