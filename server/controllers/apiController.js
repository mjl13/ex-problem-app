var Problem = require('../models/problem');
var ProblemSet = require('../models/problemset');
var Course = require('../models/course');

var problemAPI = function(app) {

	app.get('/api/problems', function(req, res) {
		Problem.getProblems(function(err, problems){
			if (err) {throw err}
			res.json(problems)
		})
	})

	app.get('/api/problems/:problem_id', function(req, res) {
		Problem.getProblemByProblemId(req.params.problem_id, function(err, problem) {
			if (err) {throw err};
			res.json(problem);
		})
	})

	// Find all problems in a problem set
	app.get('/api/problemsets/:set_id/problems', function(req, res){
		Problem.getProblemsBySetId(parseInt(req.params.set_id), function(err, problems){
			if(err) {throw err};
			res.json(problems);
		})
	})

	
}

var problemSetAPI = function(app) {

	// Get all problem sets in a course
	app.get('/api/courses/:course_id/problemsets', function(req, res){
		ProblemSet.findByCourse(parseInt(req.params.course_id), function(err, problem_sets){
			res.send(problem_sets);
		})
	})

	// Get a single problem set
	app.get('/api/problemsets/:problem_set_id', function(req, res){
		ProblemSet.getProblemSetbyProblemSetId(req.params.problem_set_id, function(err, problem_set){
			res.json(problem_set)
		})
	})



}

var courseAPI = function(app) {

	// Get all courses
	app.get('/api/courses', function(req, res){
		Course.getCourses(function(err, courses){
			if(err) {throw err}
			res.send(courses);
		})
	})

	app.get('/api/courses/:course_id', function(req, res){
		Course.getCourseByCourseId(req.params.course_id, function(err, course){
			if(err) {throw err}
			res.json(course)
		} )
	})

}


module.exports = {
	problemAPI,
	problemSetAPI,
	courseAPI
}











