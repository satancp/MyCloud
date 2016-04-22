'use strict';

var mongoose = require('mongoose');

var CryptoSchema = new mongoose.Schema({
  content: String
});

module.exports = mongoose.model('Crypto', CryptoSchema);
