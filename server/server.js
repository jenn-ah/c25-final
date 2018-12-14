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

passport.serializeUser((customer, done) => {
  done(null, customer.id)
});

passport.deserializeUser((username, cb) => {
  return new Customer()
    .where({ id: username.id })
    .fetch()
    .then((username) => {
      if (!username) {
        cb(null);
      }
      cb(null, username.id());
    });
});

passport.use('customerLogin', new LocalStrategy((username, password, done) => {
  new Customer()
    .where({ username })
    .fetch()
    .then((user) => {
      if (!user) {
        return done(null, false, { message: `Incorrect username/password` });
      }
      else {
        let customerObj = user.serialize();
        console.log('passport', customerObj, password)
        bcrypt.compare(password, customerObj.password)
          .then((res) => {
            console.log(res)
            if (res === true) { return done(null, customerObj); }
            else {
              return done(null, false, { message: `Bad username/password` })
            }
          });
      }
    });
}));

passport.use('vendorLogin', new LocalStrategy((company_name, password, done) => {
  new Vendor()
    .where({ company_name })
    .fetch()
    .then((vendor) => {
      if (!vendor) {
        return done(null, false, { message: `Incorrect username/password` });
      }
      else {
        let vendorObj = vendor.serialize();
        console.log('passport', vendorObj, password)
        bcrypt.compare(password, vendorObj.password)
          .then((res) => {
            console.log(res)
            if (res === true) { return done(null, vendorObj); }
            else {
              return done(null, false, { message: `Bad username/password` })
            }
          });
      }
    });
}));


// app.post(`/api/vendors/login`, (req, res) => {
//   let = { company_name, password, id, first_name, last_name, email, street_address, city, state, zip_code, phone_number, photo, website, description, license_number } = req.body
//   return new Vendor()
//     .where({ company_name: company_name, password: password })
//     .fetch({
//       columns: ["company_name", "password", "id", "first_name", "last_name", "email", "street_address", "city", "state", "zip_code", "phone_number", "photo", "website", "description", "license_number"]
//     })
//     .then(data => {
//       if (!data) {
//         return res.status(401).json({ message: `Company name or password incorrect` })
//       } else {
//         const vendor = data.toJSON();
//         return res.send(vendor);
//       }
//     })
// })

app.post('/api/customer/login', passport.authenticate('customerLogin', {failureRedirect: ''}),
  function(req, res){
    console.log(req.body)
    return res.send(req.body)
  });

  app.post('/api/vendors/login', passport.authenticate('vendorLogin', {failureRedirect: ''}),
  function(req, res){
    console.log(req.body)
    return res.send(req.body)
  });








app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});