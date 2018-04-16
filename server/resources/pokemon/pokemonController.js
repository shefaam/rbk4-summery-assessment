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
	req.body.number=req;

};

exports.delete = function (req, res) {
	var a=[]
	a.push(req.body)
Pokemon.find().remove()
res.render(a);

};

exports.deleteOne = function (req, res) {
	Pokemon.deleteOne(req.body)
	res.render("success")
};
