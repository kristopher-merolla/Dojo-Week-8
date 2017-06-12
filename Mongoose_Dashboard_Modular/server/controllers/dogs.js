var express = require('express'),
	mongoose = require('mongoose'),
    path = require('path');

// Create express app
var app = express();

// Create dog schema and attach it as a model to our database
var DogSchema = new mongoose.Schema({
    name: String, // can add validations here
    weight: Number,
    color: String
});

// Mongoose automatically looks for the plural version of your model name, so a Dog model in Mongoose looks for 'dogs' in Mongo.
var Dog = mongoose.model('Dog', DogSchema);

require('./../models/dog.js');

module.exports = {
	create: function(req,res) {
		// Create a new dog!
		Dog.create(req.body, function(err, result) {
			if (err) { console.log(err); }
			res.redirect('/')
		});
	},
	find: function(req,res) {
		Dog.find({}, function(err, results) {
			if (err) { console.log(err); }
			res.render('index', { dogs: results });
		});
	},
	show: function(req,res) {
		Dog.find({ _id: req.params.id }, function(err, response) {
			if (err) { console.log(err); }
			res.render('show', { dog: response[0] });
		});
	},
	edit: function(req,res) {
		Dog.find({ _id: req.params.id }, function(err, response) {
			if (err) { console.log(err); }
			res.render('edit', { dog: response[0] });
		});
	},
	update: function(req,res) {
		Dog.update({ _id: req.params.id }, req.body, function(err, result){
			if (err) { console.log(err); }
			res.redirect('/');
		});
	},
	delete: function(req,res) {
		Dog.remove({ _id: req.params.id }, function(err, result){
			if (err) { console.log(err); }
			res.redirect('/');
		});
	}
}





