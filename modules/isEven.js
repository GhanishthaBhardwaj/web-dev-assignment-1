console.log('[isEven.js] Reusable even-number module loaded');

function isEven(num) {
  return num % 2 === 0;
}

module.exports = isEven;
