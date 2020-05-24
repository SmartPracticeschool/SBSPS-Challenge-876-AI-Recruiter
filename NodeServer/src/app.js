var bodyParser = require('body-parser') ;
require('./db/mongoose') ;
const express = require('express') ;
const passport = require('./passport') ;
const path = require('path') ;
const auth_router = require('./routers/auth') ;

const cookieParser = require('cookie-parser') ;

const app = express() ;

const publicDirectoryPath = path.join(__dirname, '../public') ;

app.set('views', publicDirectoryPath) ;



// Setup static directory to serve
app.use(express.static(publicDirectoryPath)) ;

app.use(passport.initialize()) ;

// Next 5 lines help in parsing input and getting req.body
app.use(bodyParser.urlencoded({ extended: false })) ;
// parse application/json
app.use(bodyParser.json()) ;
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })) ;

// parses cookies and gives an object req.cookies
app.use(cookieParser()) ;

// Add routers to app here
app.use(auth_router)


module.exports = app;