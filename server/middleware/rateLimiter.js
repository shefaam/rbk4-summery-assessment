var rateLimit = require('express-rate-limit')
var rateLimiter = new rateLimit({
	windowMs:60*60*1000,
	max:100
})

module.exports = rateLimiter;
