require('dotenv').config()

const express = require('express');
const http = require('http');
const api = require('./routes/messages');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;
const Customer = require("./db/Models/Customer");
const Vendor = require("./db/Models/Vendor");

const categoriesRouter = require('./routes/categories');
const customersRouter = require('./routes/customers');
const postsRouter = require('./routes/posts');
const vendorsRouter = require('./routes/vendors');

const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const redis = require('connect-redis')(session);

app.use(express.static('public'));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
  store: new redis({
    url: process.env.REDIS_URL,
    logErrors: true
  }),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((username, done) => {
  done(null, username)
});

passport.deserializeUser((user, cb) => {
  console.log('des pass user', user)
  return cb(null, user);
});

passport.use('customerLocal', new LocalStrategy((username, password, done) => {
  new Customer()
    .where({ username })
    .fetch()
    .then((user) => {
      if (!user) {
        return done(null, false, { message: `Incorrect username/password` });
      }
      else {
        let customerObj = user.serialize();
        bcrypt.compare(password, customerObj.password)
          .then((res) => {
            if (res) { return done(null, customerObj); }
            else {
              return done(null, false, { message: `Bad username and/or password` });
            }
          });
      }
    });
}));

passport.use('vendorLogin', new LocalStrategy((username, password, done) => {
  new Vendor()
    .where({ username })
    .fetch()
    .then((vendor) => {
      if (!vendor) {
        return done(null, false, { message: `Incorrect username/password` });
      }
      else {
        let vendorObj = vendor.serialize();
        bcrypt.compare(password, vendorObj.password)
          .then((res) => {
            if (res) { return done(null, vendorObj); }
            else {
              return done(null, false, { message: `Bad username/password` });
            }
          });
      }
    });
}));

app.post('/api/customer/login', passport.authenticate('customerLocal', { failureRedirect: '' }),
  function (req, res) {
    res.send(req.user);
  }
);

app.post('/api/vendors/login', passport.authenticate('vendorLogin', { failureRedirect: '' }),
  function (req, res) {
    return res.send(req.user);
  });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', api);
app.use('/api/categories', categoriesRouter);
app.use('/api/customers', customersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/vendors', vendorsRouter);


const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});