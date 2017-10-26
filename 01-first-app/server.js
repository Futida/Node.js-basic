var http = require('http');

function onRequest(rerquest, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello Node.js');
    response.end();
}

http.createServer(onRequest).listen(4444);