var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset:utf-8"});
    fs.ReadStream("giaodien.html").pipe(res);

}).listen(9999);
