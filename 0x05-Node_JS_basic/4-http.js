const http = require('http');

// create http server
const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
}).listen(1245);

module.exports = app;
