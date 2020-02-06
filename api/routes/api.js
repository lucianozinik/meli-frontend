var express = require('express');
var router = express.Router();

var items = require('../controllers/items');

/* GET item list from query. */
router.get('/items', items.searchResult);

/* GET item by id.*/
router.get('/items/:id', items.itemDescription);

module.exports = router;