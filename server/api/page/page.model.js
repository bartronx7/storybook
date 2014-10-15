'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LinkSchema = new Schema({
	text: String,
	pagenum: Number
});

var PageSchema = new Schema({
  pagenum: Number,
  name: String,
  content: String,
  links: [LinkSchema]
},{
	id: false
});

module.exports = mongoose.model('Page', PageSchema);