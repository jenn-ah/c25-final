const express = require('express');
const router = express.Router();
const validator = require('validator');
const Customer = require('../db/Models'); //fix Customer model when ready


router.get('/', (req, res) => {
  return Customer.fetchAll()
    .then(customers => {
      console.log('this is customers', customers);
      return res.json(customers);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});



module.exports = router;