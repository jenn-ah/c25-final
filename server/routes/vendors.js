const express = require('express');
const router = express.Router();
const validator = require('validator');
const Vendor = require('../db/Models/Vendor');


router.get('/', (req, res) => {
  return Vendor.fetchAll()
  .then(vendors => {
    return res.json(vendors);
  })
  .catch(err => {
    return res.status(500).json({ message: err.message, code: err.code });
  });
});


router.post('/', (req, res) => {
  const { first_name, last_name, company_name, password, email, street_address, city, state, zip_code, photo, website, description, phone_number, license_number } = req.body;


  if (!validator.isAlpha(first_name)) {
    return res.status(400).json({ status: Error, message: 'Invalid first name' });
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

    return new Vendor({
      first_name,
      last_name,
      company_name,
      password,
      email,
      street_address,
      city,
      state,
      zip_code,
      photo,
      website,
      description,
      phone_number,
      license_number
    })
      .save()
      .then(vendor => {
        return res.json(vendor);
      })
      .catch(err => {
        return res.status(500).json({ message: err.message, code: err.code });
      });
  }
});


module.exports = router;