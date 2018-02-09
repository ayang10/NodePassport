const express = require('express');
const router = express.Router();

// Get request for HomePage
router.get('/', function(req, res) {
    res.render('index');
});

module.exports = router;