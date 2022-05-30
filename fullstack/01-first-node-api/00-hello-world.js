const http = require('http')
  .createServer((request, response) => response.end('Hello world!'))
  .listen(3000);
