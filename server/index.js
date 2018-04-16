var app = require('./server.js');
var port = 3000;

// app.listen(port, function () {
//   console.log('Poke-MongoDB RESTful API listening on port ' + port);
// });


app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log('Poke-MongoDB RESTful API listening on port ' + port);
})