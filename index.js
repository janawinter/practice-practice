var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')
var expressSession = require('express-session')
var passport = require('passport')
var localStrategy = require('passport-local')
var flash = require('connect-flash')

var index = require('./routes/index')

var PORT = 3000

var app = express()
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())

passport.use(new localStrategy((user, email, done) => {
  knex('users')
    .select()
    .where('name', name)
    .then(users => {
      if (users.length === 0) {
        return done (null, false, { message: 'Unrecongnised user.'})
      }
      const user = users[0]
      if (user.email !== email) {
        return done (null, false, { message: 'Incorrect email'})
      }
      done (null, user)
      res.render('loggedIn', index.loggedIn)
    })
    .catch(err => done (err, false, {message: 'Database error'}))
  }
))
// passport.serializeUser(localSodium.serialize)
// passport.deserializeUser(localSodium.deserialize)

// Session stuff
app.use(expressSession({
  resave: false,
  secret: 'CHANGE THIS IN PRODUCTION!',
  saveUninitialized: false
}))
app.use(passport.session())
app.use(flash())

app.post('/login', // Login assuming credentials are correct
  passport.authenticate('local', {
    successRedirect: '/', // Route index
    failureRedirect: '/login', // Declare login page
    failureFlash: true // No failure to be flashed
  }))

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/login')
})


app.get('/', index.index)
app.get('/display', index.get)
app.get('/login', index.login)
app.post('/login', index.postLogin)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
