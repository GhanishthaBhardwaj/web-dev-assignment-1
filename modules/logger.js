console.log('[logger.js] Logger module loaded');

function logMessage(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

module.exports = logMessage;
