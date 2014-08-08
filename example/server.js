var bus = require('../index');
var http = require('http');
var url = require('url');

/**
 * Usage: http://host:port/?bus=642
 */

http.createServer(function (req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  if (!query.bus) {
  	res.writeHead(400, {'Content-Type': 'application/json'});
  	res.end(JSON.stringify({
  		error: "No input."
  	}));
  	return;
  }

  bus(query.bus, function(err, data) {
  	if (err) {
  		res.writeHead(500);
  		res.end("Internal Error");
  		return;
  	}

  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.end(JSON.stringify(data));
  });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');