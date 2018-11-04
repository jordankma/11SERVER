var http = require('http');
http.createServer(function(reg,res){
    res.writeHead(200,{"content-type":"text/html; charset=utf-8"});
    res.write('<h1>test h1</h1>');
    res.write('<h2>test h2</h2>');
    res.end();
}).listen(1234);