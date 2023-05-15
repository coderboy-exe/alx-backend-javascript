const displayMessage = require('./0-console');

const message = 'Welcome to Holberton School, what is your name?';

displayMessage(message);

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
