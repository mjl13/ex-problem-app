 var mongoose = require('mongoose');

 var courseSchema = mongoose.Schema({
 	course_id: {type: Number},
 	title: {type: String},
 	instructors: {type: Array},
 	subject: {type: String},
 	school: {type: String},
 	description: {type: String},
 	notes: {type: String},
 	code: {type: String},

 	problem_set_ids: {type: Array}
 })

var Course = module.exports = mongoose.model('Course', courseSchema, 'courses');

var getCourses = function(callback, limit) {
	Course.find(callback).limit(limit);
}

var getCourseByCourseId = function(course_id, callback) {
	if(Array.isArray(course_id)){
		Course.find({course_id: course_id}, callback)
	}
	else{Course.find({course_id: parseInt(course_id)}, callback)}
	
}

var addCourse = function(course, callback) {
	Course.create(course, callback);
}

module.exports = {
	getCourses,
	getCourseByCourseId,
	addCourse
}