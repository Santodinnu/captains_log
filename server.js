require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const mongoConfig = require('./config')

const app = express()

const PORT = 5000

// load our engine
const jsxEngine = require('jsx-view-engine')

// setup our engine
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// bring in the router
const captainRoutes = require('./routes/captainRoutes')

// format our POST request data 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use('/logs',captainRoutes)

// "root" route
app.get('/', (req, res) => {
    res.send('<a href="/logs">Go to /logs</a>')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    mongoConfig()
})