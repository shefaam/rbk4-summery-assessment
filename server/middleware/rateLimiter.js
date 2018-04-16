 
adb= require('./server.js')
 app.rateLimiter = function (req, res, next) {
	User.find('API',function(err,user){
		if(err){
			console.log(err)
		}
		res.send(user);
		next();
	})
  // TODO
};

module.exports = rateLimiter;
