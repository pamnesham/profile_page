var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./server/public'));

app.get('/', function(req, res) {
  console.log('request for index.html');
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function(){
  console.log('Listening on port', port);
});
