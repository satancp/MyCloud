'use strict';

var mongoose = require('mongoose');

var ApplicationSchema = new mongoose.Schema({
	name: String,
  	description: String,
  	stock_state: Boolean,
  	image: String,
  	price: Number,
  	consumer_number: Number,
  	developer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Application', ApplicationSchema);
