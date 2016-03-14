'use strict';

var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	content: String
});

module.exports = mongoose.model('Question', QuestionSchema);
