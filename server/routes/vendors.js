const express = require('express');
const router = express.Router();
const validator = require('validator');
const Vendor = require('../db/Models/Vendor');
const bcrypt = require('bcryptjs');
const saltRounds = 12;


router.post('/register', (req, res) => {

  const { first_name, username, last_name, company_name, email, password, street_address, city, state, zip_code, photo, website, description, phone_number, license_number } = req.body
  const parseZip = parseInt(zip_code);

  if (!validator.isAlpha(first_name)) {
    return res.status(400).json({ status: Error, message: 'Invalid first name' });
  } else if (!validator.isAlphanumeric(username)) {
    return res.status(400).json({ status: Error, message: 'Invalid username' });
  } else if (!validator.isAlpha(last_name)) {
    return res.status(400).json({ status: Error, message: 'Invalid last name' });
  } else if (!validator.isAscii(password)) {
    return res.status(400).json({ status: Error, messsage: 'Invalid password' });
  } else if (!validator.isEmail(email)) {
    return res.status(400).json({ status: Error, message: 'Invalid email' });
  } else if (validator.isEmpty(street_address)) {
    return res.status(400).json({ status: Error, message: 'Invalid street address' });
  } else if (validator.isEmpty(city)) {
    return res.status(400).json({ status: Error, message: 'Invalid city' });
  } else if (!validator.isAlpha(state) && (state.length !== 2)) {
    return res.status(400).json({ status: Error, message: 'Invalid state' });
  } else if (!validator.isNumeric(zip_code) && (zip_code.length !== 5)) {
    return res.status(400).json({ status: Error, message: 'Invalid zip code' });
  } else if (!validator.isURL(website)) {
    return res.status(400).json({ status: Error, message: 'Invalid website' });
  } else if (validator.isEmpty(description)) {
    return res.status(400).json({ status: Error, message: 'Invalid description' });
  } else if (validator.isEmpty(phone_number)) {
    return res.status(400).json({ status: Error, message: 'Invalid phone number' });
  } else {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        return new Vendor({
          first_name,
          last_name,
          username,
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
          .then(vendor => {
            return res.json(vendor);
          })
          .catch(err => {
            return res.status(500).json({ message: err.message, code: err.code });
          });
      });
    });
  };
});

router.get('/:id', (req, res) => {
  const getId = req.params.id;

  return new Vendor()
    .where({ id: getId })
    .fetch({
      require: true,
      columns: ['first_name', 'last_name', 'company_name', 'email', 'street_address', 'city', 'state', 'zip_code', 'photo', 'website', 'description', 'phone_number', 'license_number']
    })
    .then(vendor => {
      if (!vendor) {
        res.status(400).json({ message: `Vendor not found.` });
      } else {
        const vendorObj = vendor.serialize();
        return res.json(vendorObj);
      }
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.get('/:id/edit', (req, res) => {
  const getId = req.params.id;

  return new Vendor({ id: getId })
    .fetch({
      require: true,
      columns: ['first_name', 'last_name', 'company_name', 'email', 'street_address', 'city', 'state', 'zip_code', 'photo', 'website', 'description', 'phone_number', 'license_number']
    })
    .then(vendor => {
      const vendorObj = vendor.serialize();
      return res.json(vendorObj);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.put('/:id/edit', (req, res) => {
  const getId = req.params.id;

  const { first_name, last_name, company_name, email, street_address, city, state, zip_code, photo, website, description, phone_number, license_number } = req.body;

  if (!validator.isAlpha(first_name)) {
    return res.status(400).json({ status: Error, message: 'Invalid first name' });
  } else if (!validator.isAlpha(last_name)) {
    return res.status(400).json({ status: Error, message: 'Invalid last name' });
  } else if (!validator.isEmail(email)) {
    return res.status(400).json({ status: Error, message: 'Invalid email' });
  } else if (validator.isEmpty(street_address)) {
    return res.status(400).json({ status: Error, message: 'Invalid street address' });
  } else if (validator.isEmpty(city)) {
    return res.status(400).json({ status: Error, message: 'Invalid city' });
  } else if (!validator.isAlpha(state) && (state.length !== 2)) {
    return res.status(400).json({ status: Error, message: 'Invalid state' });
  } else if (!validator.isNumeric(zip_code) && (zip_code.length !== 5)) {
    return res.status(400).json({ status: Error, message: 'Invalid zip code' });
  } else if (!validator.isURL(website)) {
    return res.status(400).json({ status: Error, message: 'Invalid website' });
  } else if (validator.isEmpty(description)) {
    return res.status(400).json({ status: Error, message: 'Invalid description' });
  } else if (validator.isEmpty(phone_number)) {
    return res.status(400).json({ status: Error, message: 'Invalid phone number' });
  } else {

    return new Vendor({ id: getId })
      .fetch({ require: true })
      .then(vendor => {
        vendor.save({
          first_name,
          last_name,
          company_name,
          email,
          street_address,
          city, state,
          zip_code,
          photo,
          website,
          description,
          phone_number,
          license_number
        })
        return res.json({ message: `Information has been updated for Vendor: ${vendor.company_name}` });
      })
      .catch(err => {
        return res.status(500).json({ message: err.message, code: err.code });
      });
  }
});

module.exports = router;