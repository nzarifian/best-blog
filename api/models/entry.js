var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entrySchema = new Schema({
	title: String,
	content: String,
	author: String,
	image: String,
	tags: String,
	created_at: Date
	

});

entrySchema.pre('save', function(next){
	var currentDate = new Date();

	this.updated_at = currentDate;

	if (!this.created_at){
		this.created_at = currentDate;
	}

	next();
})

var entry = mongoose.model('entry', entrySchema);

module.exports = entry;
