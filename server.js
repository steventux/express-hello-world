var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

port = (process.env.PORT || 1337);

app.listen(port);
console.log('Listening on port ' + port);
