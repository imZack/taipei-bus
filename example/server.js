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

  var buses = query.bus.split(",");
  var task = buses.length;
  var result = [];
  buses.forEach(function(busNo) {
    bus(busNo, function(err, data) {
      task--;
      if (err) {
        result.push({
          name: busNo,
          status: "無法取得資料"
        });
      } else {
        result.push(data);
      }
      
      if(task === 0) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
      }
    });
  });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');