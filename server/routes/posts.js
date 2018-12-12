const express = require('express');
const router = express.Router();
const Post = require('../db/Models/Post');
const validator = require('validator');

router.get('/', (req, res) => {
  return Post.fetchAll({
    withRelated: ['customerId', 'categoryId', 'postStatusId', 'postPriorityId', 'vendorId']
  })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.post('/', (req, res) => {
  const { title, customer_id, post_status_id, post_priority_id, photo, description, city, state, zip_code, budget, can_bid } = req.body;
  const parseCustId = parseInt(customer_id);
  const parsePostStatId = parseInt(post_status_id);
  const parsePostPriorId = parseInt(post_priority_id);
  const parseBudget = parseInt(budget);
  const parseZipcode = parseInt(zip_code);

  if (validator.isEmpty(title)) {
    return res.status(400).json({ status: Error, message: 'Invalid title' });
  } else if (validator.isEmpty(description)) {
    return res.status(400).json({ status: Error, message: 'Invalid description' });
  } else if (validator.isEmpty(city)) {
    return res.status(400).json({ status: Error, message: 'Invalid city' });
  } else if (!validator.isAlpha(state) && (state.length !== 2)) {
    return res.status(400).json({ status: Error, message: 'Invalid state' });
  } else if (!validator.isNumeric(zip_code) && (zip_code.length !== 5)) {
    return res.status(400).json({ status: Error, message: 'Invalid zipcode' });
  } else if (!validator.isNumeric(budget)) {
    return res.status(400).json({ status: Error, message: 'Invalid input for budget' });
  } else if (!validator.isBoolean(can_bid)) {
    return res.status(400).json({ status: Error, message: 'Invalid input' });
  } else {

    return new Post({
      title,
      customer_id: parseCustId,
      photo,
      description,
      city,
      state,
      zip_code: parseZipcode,
      budget: parseBudget,
      can_bid
    })
      .save()
      .then(post => {
        return post.refresh({
          withRelated: ['customerId', 'categoryId', 'postStatusId', 'postPriorityId', 'vendorId']
        });
      })
      .then(post => {
        return res.json(post);
      })
      .catch(err => {
        return res.status(500).json({ message: err.message, code: err.code })
      })
  }
})

module.exports = router;