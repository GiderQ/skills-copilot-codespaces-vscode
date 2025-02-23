// Create Web Server
// 1. Create Web Server
// 2. Create Router
// 3. Create Routes

// 1. Create Web Server
var http = require('http');
var server = http.createServer();

// 2. Create Router
var router = require('./router.js');

// 3. Create Routes
router.get('/', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Home');
});

router.get('/about', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('About');
});

router.get('/contact', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Contact');
});

server.on('request', function(req, res){
  router.route(req, res);
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');