const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); //this is the bug, should be server.listen(8080, () => {console.log('Server is running on port 8080');});
console.log('Server is running on port 8080'); // this will run before server is running, leading to unexpected behavior
