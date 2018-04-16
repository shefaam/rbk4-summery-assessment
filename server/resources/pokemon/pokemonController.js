var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
  new  Pokemon({name:req.body.name,number:req.body.number,types:req.body.types})
  // res.send()
};

exports.retrieve = function (req, res) {
	Pokemon.find(req,function (err, Pokemon) {
  if (err) return console.log('err');
 res.render(req.body);
 //console.log(req.body)
})

};

exports.retrieveOne = function (req, res) {
Pokemon.findOne(function (err, person) {
  if (err) return console.log('err');
 res.render(req.body)
// console.log(req.body)

});


};

exports.updateOne = function (req, res) {

};

exports.delete = function (req, res) {
Pokemon.find().remove()
res.render("success")

};

exports.deleteOne = function (req, res) {
	Pokemon.deleteOne(req.body)
	res.render("success")
};
