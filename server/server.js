const express = require('express');
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

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/categories', categoriesRouter);
app.use('/api/customers', customersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/vendors', vendorsRouter);

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

passport.deserializeUser((username, cb) => {
  return new Customer()
    .where({ id: username })
    .fetch()
    .then((username) => {
      if (!username) {
        cb(null, 'pass');
      }
      cb(null, username);
    });
});

passport.deserializeUser((username, cb) => {
  return new Vendor()
    .where({ id: username })
    .fetch()
    .then((username) => {
      if (!username) {
        cb(null, 'pass');
      }
      cb(null, username);
    });
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
            if (res === true) { return done(null, customerObj); }
            else {
              return done(null, false, { message: `Bad username/password` })
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
            if (res === true) { return done(null, vendorObj); }
            else {
              return done(null, false, { message: `Bad username/password` })
            }
          });
      }
    });
}));

app.post('/api/customer/login', passport.authenticate('customerLocal', { failureRedirect: '' }),
  function (req, res) {
    return res.send(req.body)
  });

app.post('/api/vendors/login', passport.authenticate('vendorLogin', { failureRedirect: '' }),
  function (req, res) {
    return res.send(req.body)
  });








app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});