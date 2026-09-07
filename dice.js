const crypto = require('crypto');
const logMessage = require('./modules/logger');

logMessage(`Raw CLI arguments: ${JSON.stringify(process.argv)}`);

function rollDice() {
  return crypto.randomInt(1, 7);
}

function rollMany(count) {
  return Array.from({ length: count }, () => rollDice());
}

if (require.main === module) {
  const requestedRolls = process.argv[2] === undefined ? 1 : Number(process.argv[2]);

  if (!Number.isInteger(requestedRolls) || requestedRolls < 1) {
    logMessage('Dice input validation failed');
    console.error('Usage: node dice.js [number-of-rolls]');
    process.exitCode = 1;
  } else {
    logMessage(`Starting ${requestedRolls} dice roll(s)`);
    for (let rollNumber = 1; rollNumber <= requestedRolls; rollNumber += 1) {
      const result = rollDice();
      logMessage(`🎲 Dice Rolled: ${result} (roll ${rollNumber} of ${requestedRolls})`);
    }
    logMessage('Dice rolling finished');
  }
}

module.exports = { rollDice, rollMany };
