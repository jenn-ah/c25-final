const express = require('express');
const router = express.Router();
const validator = require('validator');
const Customer = require('../db/Models/Customer');


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

router.get('/:id', (req, res) => {
  const grabId = req.params.id;
  //fix route once auth login configured

  return new Customer()
  .where({ id: grabId })
    .fetch({
      columns: [
        'id', 'first_name', 'last_name', 'username', 'email', 'state', 'city', 'zip_code']
    })
})

module.exports = router;