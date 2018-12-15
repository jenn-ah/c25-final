const express = require('express');
const router = express.Router();
const validator = require('validator');
const Customer = require('../db/Models/Customer');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const saltRounds = 12;

router.get('/smoke', (req, res) => {
  console.log('router', req.header)
  res.send('smoke test for users route');
})

router.get('/', (req, res) => {
  return Customer.fetchAll()
    .then(customers => {
      return res.json(customers);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/:id', (req, res) => {
  const getId = req.params.id;

  return new Customer()
    .where({ id: getId })
    .fetch({
      require: true,
      columns: ['first_name', 'last_name', 'username', 'email', 'state', 'city', 'zip_code']
    })
    .then(customer => {
      if (!customer) {
        res.status(400).json({ message: `User not found.` });
      } else {
        const custObj = customer.serialize();
        return res.json(custObj);
      }
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.post('/', (req, res) => {
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
  else {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
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
      })
    })
  }
});


router.get('/:id/edit', (req, res) => {
  const getId = parseInt(req.params.id);

  return new Customer({ id: getId })
    .fetch({
      require: true,
      columns: ['first_name', 'last_name', 'username', 'email', 'state', 'city', 'zip_code']
    })
    .then(customer => {
      const custObj = customer.serialize();
      return res.json(custObj);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.put('/:id/edit', (req, res) => {
  const getId = parseInt(req.params.id);

  const { first_name, last_name, username, email, state, city, zip_code } = req.body;

  if (!validator.isAlpha(first_name)) {
    return res.status(400).json({ status: Error, message: 'Invalid first name' });
  } else if (!validator.isAlpha(last_name)) {
    return res.status(400).json({ status: Error, message: 'Invalid last name' });
  } else if (!validator.isAlphanumeric(username)) {
    return res.status(400).json({ status: Error, message: 'Invalid username, letters and numbers only' });
  } else if (!validator.isEmail(email)) {
    return res.status(400).json({ status: Error, message: 'Invalid email' });
  } else if (!validator.isAlpha(state) && (state.length !== 2)) {
    return res.status(400).json({ status: Error, message: 'Invalid state' });
  } else if (!validator.isAlpha(city)) {
    return res.status(400).json({ status: Error, message: 'Invalid city' });
  } else if (!validator.isNumeric(zip_code)) {
    return res.status(400).json({ status: Error, message: 'Invalid zipcode' });
  } else {
    return new Customer({ id: getId })
      .fetch({ require: true })
      .then(customer => {
        customer.save({
          first_name,
          last_name,
          email,
          state,
          city,
          zip_code
        })
        return res.json({ message: `Information has been updated for ${customer.first_name}` });
      })
      .catch(err => {
        return res.status(500).json({ message: err.message, code: err.code });
      });
  }
});


module.exports = router;