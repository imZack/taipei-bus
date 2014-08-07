var request = require("request");
var cheerio = require("cheerio");

var bus = module.exports = function(bus, callback) {
  request('http://pda.5284.com.tw/MQS/businfo2.jsp?routeId=' + bus,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        var data = {"bus": bus, "go": [], "back": []};
        var stopObj = {};

        $(".tteback1 td, .tteback2 td, .ttego1 td, .ttego2 td")
        .map(function(index, element) {
          if (index%2 === 0) {
            if (stopObj.name) {
              if (stopObj.direction === 0) {
                data.go.push(stopObj);
              } else {
                data.back.push(stopObj);
              }
            }
            
            stopObj = {};
            stopObj.name = $(element).text();
            if ($(element).parent().hasClass("ttego1") ||
              $(element).parent().hasClass("ttego2")) {
              stopObj.direction = 0;
            } else {
              stopObj.direction = 1;
            }
          } else {
            stopObj.buses = [];
            $(element).children("font").map(function(i, e) {
              stopObj.buses.push($(e).text());
            });
            $(element).children().remove();
            stopObj.status = $(element).text();
          }
        });
        callback(null, data);
      } else {
        callback(error, response);
      }
  });
};
