const { createServer } = require('http');
const { readFile } = require('fs');
const { extname } = require('path');
const PORT = process.env.PORT || 8080;

createServer((request, response) => {
  let filePath = './client' + request.url;
  let contentType;

  if (request.url === '/') {
    filePath += 'index.html';
  }

  switch (extname(filePath)) {
  case '.js':
    contentType = 'text/javascript';
    break;
  case '.css':
    contentType = 'text/css';
    break;
  default:
    contentType = 'text/html';
  }

  readFile(filePath, function (err, data) {
    if (err) {
      response.writeHead(500);
      response.end('Sorry, error: ' + err.code + ' ..\n');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(data, 'utf-8');
    }
  });

}).listen(PORT, () => {
  console.log(`starting server at port ${PORT}`);
});
