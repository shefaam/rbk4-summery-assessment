var rateLimiter = function (req, res, next) {
  // TODO
req.rateLimiter=Date.now()
//100 request per hour
  next()
};

module.exports = rateLimiter;
