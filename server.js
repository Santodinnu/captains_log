require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const mongoConfig = require('./config')

const app = express()

const PORT = 5000

// load our engine
const jsxEngine = require('jsx-view-engine')

// bring in the router
const logRoutes = require('./routes/logRoutes')

// format our POST request data 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use('/logs', logRoutes)


// setup our engine
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// "root" route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    mongoConfig()
})