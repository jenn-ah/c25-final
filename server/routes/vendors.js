const express = require('express');
const router = express.Router();
const validator = require('validator');
const Vendor = require('../db/Models/Vendor');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const redis = require('connect-redis')(session);

const saltRounds = 12;

router.get('/smoke', (req, res) => {
    res.send('smoke test for vendors route');
})

router.post('/api/vendors/register', (req, res) => {
    let { first_name, last_name, company_name, email, password, street_address, city, state, zip_code, photo, website, description, phone_number, license_number } = req.body
    const parseZip = parseInt(zip_code);
    console.log(parseZip);
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
  

module.exports = router;