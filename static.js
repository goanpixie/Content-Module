module.exports = function(){
  var fs = require('fs');
  var ssn =  8374529038745;

  return {
  fetch: function(request, response) {

     if(request.url==='/'){
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(contents);
          response.end();
        });
      }
    },

  cars: function(request, response) {
  console.log("I am working.")
  if(request.url==='/cars'){
     fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
       response.writeHead(200, {'Content-Type': 'text/html'});
       response.write(contents);
       response.end();
     });
   }
 }

  }
};
