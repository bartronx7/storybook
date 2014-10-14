'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var page = require('../page/page.model');

var BookSchema = new Schema({
  name: String,
  pages: [page.schema]
});

module.exports = mongoose.model('Book', BookSchema);