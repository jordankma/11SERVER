var fs = require('fs');
function loadFile(file_name,res){
    res.writeHead(200,{"Content-type":"text/html;charset:utf-8"});
    fs.ReadStream(file_name).pipe(res);
}
var load_route = function(req,res){
    var path = req.url;
    switch(path){
        case "/" : 
            loadFile("giaodien1.html",res);
            break;
        case "/tin-tuc" : 
            loadFile("giaodien2.html",res);
            break;
        default :
            loadFile("404.html",res);
            break;
    }
};
module.exports.load_route = load_route;