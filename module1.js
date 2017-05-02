var ttp = require('http');

var server = ttp.createServer(function(request, response){
    console.log("Got a request");
    response.write('Hello');
    response.end();
});

server.listen(8000);