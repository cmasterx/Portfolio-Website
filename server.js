const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const credentials = {
  key: fs.readFileSync('sslcert/key.pem', 'utf8'),
  cert: fs.readFileSync('sslcert/cert.pem', 'utf8')
};

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function(req, res) {
    return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
