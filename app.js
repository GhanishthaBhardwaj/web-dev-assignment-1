const isEven = require('./modules/isEven');
const logMessage = require('./modules/logger');

logMessage(`Raw CLI arguments: ${JSON.stringify(process.argv)}`);
const value = process.argv[2];
const number = Number(value);

if (value === undefined || !Number.isFinite(number)) {
  logMessage('Parity check could not start because the input is invalid');
  console.error('Usage: node app.js <number>');
  process.exitCode = 1;
} else {
  logMessage(`Checking whether ${number} is even or odd`);
  const result = isEven(number) ? 'even' : 'odd';
  logMessage(`Parity check finished: ${number} is ${result}`);
}
