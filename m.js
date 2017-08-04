var express = require('express');
var app = express();
app.get('/',funtion (req,res) {
  res.send("hello world");
})
app.get('/admission',funtion (req,res) {
  res.send("admission started");
})
var server = app.listen(8081,function(){
  var host = server.address().address
  var port = server.address().port
  console.log("listening @ port 8081")
})
