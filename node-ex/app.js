var http = require("http");
var port = 3000;
var app = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<html><head><title>HelloWorld</title></head><body><p>I'm SREEHARI K.V</p></body></html>");
    res.end();
});
app.listen(3000);
console.log("server Listening on port 3000");