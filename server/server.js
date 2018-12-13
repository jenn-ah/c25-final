const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;
const Customer = require("./db/Models/Customer");
const Vendor = require("./db/Models/Vendor");

const categoriesRouter = require('./routes/categories');
const customersRouter = require('./routes/customers');
const postsRouter = require('./routes/posts');
const vendorsRouter = require('./routes/vendors');

const validator = require('validator');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const redis = require('connect-redis')(session);

const saltRounds = 12;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/categories', categoriesRouter);
app.use('/api/customers', customersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/vendors', vendorsRouter);

app.use(session({
  store: new redis({
    url: 'redis://redis-server:6379',
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

passport.deserializeUser((customerId, cb) => {
  return new Customer()
    .where({ id: customerId })
    .fetch()
    .then((customer) => {
      if (!customer) {
        cb(null);
      }
      cb(null, customer.serialize());
    });
});

passport.use(new LocalStrategy((username, password, done) => {
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
              return done(null, false, { message: `Bad username/password` })
            }
          });
      }
    });
}));

app.post('/api/customers', (req, res) => {
  console.log('server reg', req.body)
  let { first_name, last_name, username, password, email, state, city, zip_code } = req.body;

  const parseZipcode = parseInt(zip_code);

  if (!validator.isAlpha(first_name)) {
    return res.status(400).json({ status: Error, message: 'Invalid first name' });
  } else if (!validator.isAlpha(last_name)) {
    return res.status(400).json({ status: Error, message: 'Invalid last name' });
  } else if (!validator.isAlphanumeric(username)) {
    return res.status(400).json({ status: Error, message: 'Invalid username, letters and numbers only' });
  } else if (!validator.isAscii(password)) {
    return res.status(400).json({ status: Error, message: 'Invalid password' });
  } else if (!validator.isEmail(email)) {
    return res.status(400).json({ status: Error, message: 'Invalid email' });
  } else if (!validator.isAlpha(state) && (state.length !== 2)) {
    return res.status(400).json({ status: Error, message: 'Invalid state' });
  } else if (!validator.isAlpha(city)) {
    return res.status(400).json({ status: Error, message: 'Invalid city' });
  } else if (!validator.isNumeric(zip_code)) {
    return res.status(400).json({ status: Error, message: 'Invalid zipcode' });
  }
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      {
        return new Customer({

          first_name,
          last_name,
          username,
          password: hash,
          email,
          state,
          city,
          zip_code: parseZipcode
        })
          .save()
          .then(customer => {
            return res.json(customer);
          })
          .catch(err => {
            return res.status(500).json({ message: err.message, code: err.code });
          });
      }
    });
  })
})

app.post('/api/vendors/register', (req, res) => {
  let { first_name, last_name, company_name, email, password, street_address, city, state, zip_code, photo, website, description, phone_number, license_number } = req.body
  const parseZip = parseInt(zip_code);
  console.log(parseZip);
  //const parsePhone = parseInt(phone_number)
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      return new Vendor({
        first_name,
        last_name,
        company_name,
        email,
        phone_number,
        password: hash,
        street_address,
        city,
        state,
        zip_code: parseZip,
        photo,
        website,
        description,
        license_number
      })
        .save()
        .then(() => {
          console.log('route');
        })
    })
  })
})


app.post(`/api/vendors/login`, (req, res) => {
  let = { company_name, password, id, first_name, last_name, email, street_address, city, state, zip_code, phone_number, photo, website, description, license_number } = req.body
  return new Vendor()
    .where({ company_name: company_name, password: password })
    .fetch({
      columns: ["company_name", "password", "id", "first_name", "last_name", "email", "street_address", "city", "state", "zip_code", "phone_number", "photo", "website", "description", "license_number"]
    })
    .then(data => {
      if (!data) {
        return res.status(401).json({ message: `Company name or password incorrect` })
      } else {
        const vendor = data.toJSON();
        return res.send(vendor);
      }
    })
})

app.post(`/api/login`, (req, res) => {
  let = { username, password, id, email, first_name, last_name, city, state, zip_code, } = req.body
  return new Customer()
    .where({ username: username, password: password })
    .fetch({
      columns: ["username", "password", "id", "email", "first_name", "last_name", "city", "state", "zip_code"]
    })
    .then(data => {
      if (!data) {
        return res.status(401).json({ message: `Username or password incorrect` })
      } else {
        const customer = data.toJSON();
        return res.send(customer)
      }
    })
    .catch(err => {
      return res.send('Username or password is incorrect')
    })
})
app.post('/api/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '',
}));

app.get('/smoke', (req, res) => {
  res.send('smoke test')
})






app.listen(PORT, () => {
  process.stdout.write(`Server listening on port: ${PORT}`);
});