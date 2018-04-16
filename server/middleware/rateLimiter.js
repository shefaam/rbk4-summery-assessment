var rateLimiter = function (req, res, next) {
  res.header('X-Hello', 'World')
  next()
}
};

module.exports = rateLimiter;
