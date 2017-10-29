var axios = require ('axios')

var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(8080);

console.log('Server running on port 8080');

var links = ['http://www.nbrb.by/API/ExRates/Rates?Periodicity=0', 
'http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-6&Periodicity=0', 
'http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-1&Periodicity=1', 
'http://www.nbrb.by/API/ExRates/Rates/840?ParamMode=1', 
'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2016-7-5'];

for (var i = 0; i < links.length; i++) {
    axios.get(links[i])
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}
