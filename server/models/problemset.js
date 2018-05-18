var mongoose = require('mongoose');

var problemSetSchema = mongoose.Schema({
 	problem_set_id: {type: Number},
 	title: {type: String},
 	authors: {type: Array},
 	date: {type: String},
 	
 	course_id: {type: Number},
 	problem_ids: {type: Array}
})

var ProblemSet = module.exports = mongoose.model('ProblemSet', problemSetSchema, 'problem_sets');

var getProblemSets = function(callback, limit) {
	ProblemSet.find(callback).limit(limit);
}

var getProblemSetbyProblemSetId = function(problem_set_id, callback) {
	ProblemSet.find({problem_set_id: parseInt(problem_set_id)}, callback)
}

var findByCourse = function(course_id, callback) {
	ProblemSet.find({course_id: parseInt(course_id)}, callback);
}

var addProblemSet = function(problem_set, callback) {
	ProblemSet.create(problem_set, callback);
}



module.exports = {
	getProblemSets,
	getProblemSetbyProblemSetId,
	addProblemSet,
	findByCourse
}