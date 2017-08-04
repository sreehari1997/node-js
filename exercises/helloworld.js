var http = require("http");
var app = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.write("hello world");
    res.end();
});
app.listen(3000);
console.log("server listening on port 3000");