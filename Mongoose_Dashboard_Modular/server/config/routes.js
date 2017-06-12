var express = require('express'),
	mongoose = require('mongoose'),
    path = require('path');

// Create express app
var app = express();

var dogs = require('../controllers/dogs.js');

// ROUTES //
module.exports = function(app){
	// Index
	app.get('/', function(req, res){
		dogs.find(req,res);
	});
	// Create
	app.post('/', function(req, res){
		dogs.create(req,res);
	});
	// New
	app.get('/new', function(req, res){
	  res.render('new');
	});
	// Show
	app.get('/:id', function(req, res){
		dogs.show(req,res);
	});
	// Edit
	app.get('/:id/edit/', function(req, res){
		dogs.edit(req,res);
	});
	// Update
	app.post('/:id', function(req, res){
		dogs.update(req,res);
	});
	// Delete
	app.post('/:id/delete', function(req, res){
		dogs.delete(req,res);
	});	
}
