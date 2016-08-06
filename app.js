var http = require('http');
var fs = require('fs');
// console.log(fs);
var static_contents = require('./static')();

var server = http.createServer(function (request, response){
  console.log("I'm here")
  static_contents.fetch(request, response),
  static_contents.cars(request, response)



});
server.listen(8000);
console.log("Running in localhost at port 8000");


// var my_module = require('./my_module')();     //notice the extra invocation parenthesis!
// console.log(my_module);
// my_module.greet();
// my_module.add(5,6);
