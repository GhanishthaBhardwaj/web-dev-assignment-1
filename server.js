const http = require('http');
const logMessage = require('./modules/logger');

const port = 3000;

function sendJson(res, statusCode, body, route) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
  logMessage(`Response sent: ${statusCode} ${route}`);
}

const server = http.createServer((req, res) => {
  logMessage(`Incoming request: ${req.method} ${req.url}`);

  if (req.url === '/') {
    sendJson(res, 200, { message: 'Welcome to the Smart Utility Toolkit' }, req.url);
  } else if (req.url === '/about') {
    sendJson(res, 200, {
      name: 'Smart Utility Toolkit',
      description: 'A modular CLI toolkit built with Node.js core modules.'
    }, req.url);
  } else if (req.url === '/contact') {
    sendJson(res, 200, {
      message: 'Contact the Smart Utility Toolkit team at toolkit@example.com.'
    }, req.url);
  } else {
    sendJson(res, 404, { error: 'Route not found' }, req.url);
  }
});

server.listen(port, () => {
  logMessage(`Server running on http://localhost:${port}`);
});
