var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'html'});
  res.return(index.html);
}).listen(8080);