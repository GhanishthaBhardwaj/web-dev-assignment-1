const logMessage = require('./modules/logger');

logMessage(`Raw CLI arguments: ${JSON.stringify(process.argv)}`);
const operation = process.argv[2];
const firstValue = process.argv[3];
const secondValue = process.argv[4];
const firstNumber = Number(firstValue);
const secondNumber = Number(secondValue);

function printUsage() {
  console.error('Usage: node calculator.js <add|subtract> <num1> <num2>');
}

if (
  !['add', 'subtract'].includes(operation) ||
  firstValue === undefined ||
  secondValue === undefined ||
  !Number.isFinite(firstNumber) ||
  !Number.isFinite(secondNumber)
) {
  logMessage('Calculator input validation failed');
  printUsage();
  process.exitCode = 1;
} else {
  logMessage(`Starting ${operation} calculation with ${firstNumber} and ${secondNumber}`);
  const result = operation === 'add'
    ? firstNumber + secondNumber
    : firstNumber - secondNumber;

  logMessage(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
  console.log(`Result: ${result}`);
  logMessage('Calculation finished');
}
