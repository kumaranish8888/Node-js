const http = require('http');

const hostname = 'localhost';

const port = 8000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log('Server started on port ' +port); 
});