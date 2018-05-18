var mongoose = require('mongoose');

var problemSchema = mongoose.Schema({
	problem_id: {type: Number},
	set_id: {type: Number},
 	problem_data: {type: Object},
 	information: {type: Array},
 	declaration: {type: Array},
 	solution: {type: Array}
})

var Problem = module.exports = mongoose.model('Problem', problemSchema, 'problems');

var getProblems = function(callback, limit) {
	Problem.find(callback).limit(limit);
}

var getProblemByProblemId = function(problem_id, callback) {
	Problem.find({problem_id: parseInt(problem_id)}, callback)
}

var getProblemsBySetId = function(set_id, callback) {
	Problem.find({set_id: parseInt(set_id)}, callback);
}

var addProblem = function(problem, callback) {
	Problem.create(problem, callback);
}



module.exports = {
	getProblems,
	getProblemByProblemId,
	getProblemsBySetId,
	addProblem
}