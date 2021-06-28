const express = require('express')
const app = express();
const ejsMate = require('ejs-mate')
const path = require('path')
const methodOverride = require('method-override')

// Mongooose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('DATABASE CONNECTED')
});


app.engine('ejs', ejsMate)
app.set('ejs', 'view engine')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.set(methodOverride, '_method')


// Routers
const generalRoute = require('./routes/general')

app.use('/', generalRoute);

// app.get('/', (req, res) => {
//     res.send('test')
// })


app.listen(3000, () => {
    console.log('SERVER RUNNING ON PORT 3000');
})