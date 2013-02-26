var mongojs = require('mongojs')

console.log(process.env.MONGOLAB_URI)
var db = mongojs(process.env.MONGOLAB_URI || 'lglwebsite', ['ideas']);

exports.getIdeas = function (callback) {
	db.ideas.find(callback);
}

exports.saveIdea = function (idea) {
	db.ideas.save(idea);
}