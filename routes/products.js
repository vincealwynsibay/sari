const express = require('express');
const router = express.Router();

// UTILS
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

// All Products
router.get('/', (req, res) => {
    res.render('products/index');
})

// Create New Product
router.get('/new', (req, res) => {
    res.render('products/index');
})

// Edit Existing Product
router.get('/edit', (req, res) => {
    res.render('products/index');
})






module.exports = router;