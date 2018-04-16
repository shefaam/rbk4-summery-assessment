var rateLimiter = function (req, res, next) {
  // TODO
 
  app.get('/api/pokemon',function(req,res,next){
  	app.send('User');
  })

  app.get('server/server.js', function(req,res,next){
  	console.log('requist type',req.method)
  	next();
  })
};

module.exports = rateLimiter;
