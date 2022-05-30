const http = require('http');

const port = process.env.PORT || 3030;

const server = http.createServer((request, response) => {
  return response.end('Server Node.js');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
