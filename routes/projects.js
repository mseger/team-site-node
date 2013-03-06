// hardware display page

var db = require('../controllers/db');

exports.main = function(req, res){
	db.getIdeas(function(err, ideas) {
		res.render('projects', {title: "Projects", ideas: ideas, highlight: "ideas"});
	});
};

exports.post = function(req, res){
	db.saveIdea(req.body);
	res.send('ok');
};
