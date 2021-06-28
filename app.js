const express = require('express')
const app = express();
const ejsMate = require('ejs-mate')
const path = require('path')
const methodOverride = require('method-override')

// Mongooose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Sari', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('DATABASE CONNECTED')
});

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.set(methodOverride, '_method')


// Routers
const generalRoute = require('./routes/general');
const productsRoute = require('./routes/products');
const ExpressError = require('./utils/ExpressError');

app.use('/', generalRoute);
app.use('/products', productsRoute);

app.all('*', (req, res, next) => {
    throw new ExpressError('Page not Found', 404);
})

app.use((err, req, res, next) => {
    const { statusCode } = err;
    if (!err.message) err.message = "Something went Wrong";
    res.status(statusCode).send(err.message)
})


app.listen(3000, () => {
    console.log('SERVER RUNNING ON PORT 3000');
})