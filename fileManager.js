const fs = require('fs');
const logMessage = require('./modules/logger');

logMessage(`Raw CLI arguments: ${JSON.stringify(process.argv)}`);
const action = process.argv[2];
const filename = process.argv[3];
const content = process.argv.slice(4).join(' ');

function printUsage() {
  console.error('Usage: node fileManager.js <create|read|update|delete> <filename> [content]');
}

if (!action || !filename) {
  printUsage();
  process.exitCode = 1;
} else {
  try {
    switch (action) {
      case 'create':
        if (!content) {
          printUsage();
          process.exitCode = 1;
          break;
        }
        logMessage(`Starting create for ${filename}`);
        // writeFileSync blocks until the file has been written.
        fs.writeFileSync(filename, content, 'utf8');
        logMessage(`Created ${filename}`);
        break;
      case 'read':
        logMessage(`Starting read for ${filename}`);
        // readFileSync blocks until the file contents are available.
        console.log(fs.readFileSync(filename, 'utf8'));
        logMessage(`Read ${filename}`);
        break;
      case 'update':
        if (!content) {
          printUsage();
          process.exitCode = 1;
          break;
        }
        logMessage(`Starting update for ${filename}`);
        // appendFileSync blocks until the new content has been appended.
        fs.appendFileSync(filename, content, 'utf8');
        logMessage(`Updated ${filename}`);
        break;
      case 'delete':
        logMessage(`Starting delete for ${filename}`);
        // unlinkSync blocks until the directory entry has been removed.
        fs.unlinkSync(filename);
        logMessage(`Deleted ${filename}`);
        break;
      default:
        printUsage();
        process.exitCode = 1;
    }
  } catch (error) {
    logMessage(`Could not ${action} ${filename}: ${error.message}`);
    process.exitCode = 1;
  }
}
