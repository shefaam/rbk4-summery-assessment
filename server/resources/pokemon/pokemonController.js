var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
  /* START SOLUTION */
  var newPokemon = req.body;
  Pokemon.create(newPokemon, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    res.status(201).json(response);
  });
  /* END SOLUTION */
};

exports.retrieve = function (req, res) {
  /* START SOLUTION */
  var query = req.query;
  Pokemon.find(query, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (response.length === 0) {
      return res.sendStatus(404);
    }
    res.json(response);
  });
  /* END SOLUTION */
};

exports.retrieveOne = function (req, res) {
  /* START SOLUTION */
  var query = { number: req.params.number };
  Pokemon.findOne(query, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (!response) {
      return res.sendStatus(404);
    }
    res.json(response);
  });
  /* END SOLUTION */
};

exports.updateOne = function (req, res) {
  /* START SOLUTION */
  var query = { number: req.params.number };
  var updatedProps = req.body;
  var options = { new: true };
  Pokemon.findOneAndUpdate(query, updatedProps, options, function (err, response) {
    if (err) {
      return res.json(err.message);
    }
    if (!response) {
      return res.sendStatus(404);
    }
    res.json(response);
  });
  /* END SOLUTION */
};

exports.delete = function (req, res) {
  /* START SOLUTION */
  Pokemon.find({}, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (response.length === 0) {
      return res.sendStatus(404);
    }
    Pokemon.remove({}, function (err) {
      if (err) {
        return res.status(500).json(err.message);
      }
      res.json(response);
    });
  });
  /* END SOLUTION */
};

exports.deleteOne = function (req, res) {
  /* START SOLUTION */
  var query = { number: req.params.number };
  Pokemon.findOneAndRemove(query, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (!response) {
      return res.sendStatus(404);
    }
    res.status(200).json(response);
  });
  /* END SOLUTION */
};
