const express = require('express');
const router = express.Router();

// Get request for HomePage
router.get('/register', function(req, res) {
    res.render('register');
});

// Login route
router.get('/login', function(req, res) {
    res.render('login');
});

module.exports = router;