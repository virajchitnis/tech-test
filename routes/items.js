var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');

var Item = require('../models/Item');

/* GET all items. */
router.get('/', function(req, res, next) {
	Item.find(function (err, items) {
		if (err) return next(err);

		res.json(items);
	});
});

/* POST (add) a new item */
router.post('/', function(req, res, next) {
	var req_item = {
		name: req.body.name
	};

	var item = new Item(req_item);

	item.save(function(err, item){
		if(err){ return next(err); }

		res.json(item);
	});
});

module.exports = router;
