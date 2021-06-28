const express = require('express');
const router = express.Router();

// UTILS
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

// Create New Product
router.get('/new', (req, res) => {
    res.render('products/new');
})

router.post('/', catchAsync(async (req, res) => {

}))


// All Products
router.get('/', (req, res) => {
    res.render('products/index');
})

// Show Product
router.get('/:id', catchAsync(async (req, res) => {
    res.render('products/show');
}))

// Edit Existing Product
router.get('/edit', (req, res) => {
    res.render('products/edit');
})

router.put('/', catchAsync(async (req, res) => {

}))


module.exports = router;