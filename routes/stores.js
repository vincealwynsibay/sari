const express = require('express');
const router = express.Router();

// UTILS
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

// Create New Store
router.get('/new', (req, res) => {
    res.render('stores/new');
})

router.post('/', catchAsync(async (req, res) => {

}))

// Edit Existing Store
router.get('/edit', (req, res) => {
    res.render('stores/edit');
})


router.put('/', catchAsync(async (req, res) => {

}))



// All Products
router.get('/', (req, res) => {
    res.render('stores/index');
})

// Show Store
router.get('/:id', catchAsync(async (req, res) => {
    res.render('stores/show');
}))



module.exports = router;