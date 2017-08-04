var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.sendFile(__dirname+"/"+"index2.html");
})

app.get('/admission', function (req, res) {
   res.send('Admission started');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
