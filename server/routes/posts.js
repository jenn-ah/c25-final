const express = require('express');
const router = express.Router();
const Post = require('../db/Models/Post');
const Category = require('../db/Models/Category');
const PostStatus = require('../db/Models/PostStatus');
const PostPriority = require('../db/Models/PostPriority');
const validator = require('validator');

router.get('/', (req, res) => {
  return Post.fetchAll({
    withRelated: ['customerId', 'postStatusId', 'postPriorityId'] //add category_id once setup
  })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.post('/', (req, res) => {
  const { title, category_id,  customer_id, post_status_id, post_priority_id, photo, description, city, state, zip_code, budget, can_bid } = req.body;

  const parseCustId = parseInt(customer_id);
  const parsePostStatId = parseInt(post_status_id);
  const parsePostPriorId = parseInt(post_priority_id);
  const parseBudget = parseInt(budget);
  const parseZipcode = parseInt(zip_code);
  const parseCat = parseInt(category_id);

console.log(parseBudget, parseCustId, parsePostStatId, parseZipcode, parsePostPriorId, parseCat)



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
      category_id: parseCat,
      post_status_id: parsePostStatId,
      post_priority_id: parsePostPriorId,
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
          withRelated: ['customerId', 'categoryId', 'postStatusId', 'postPriorityId']
        });
      })
      .then(post => {
        return res.json(post);
      })
      .catch(err => {
        return res.status(500).json({ message: err.message, code: err.code })
      })
  }
});


router.get('/:id', (req, res) => {
  const getId = req.params.id;

  return new Post({ id: getId })
    .fetch({
      require: true,
      columns: ['id', 'title', 'post_status_id', 'post_priority_id', 'photo', 'description', 'city', 'state', 'zip_code', 'budget', 'can_bid']
    })
    .then(post => {
      const postObj = post.serialize();
      return res.json(postObj);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/:id/edit', (req, res) => {
  const getId = req.params.id;

  return new Post({ id: getId })
    .fetch({
      require: true,
      columns: ['id', 'title', 'post_status_id', 'post_priority_id', 'photo', 'description', 'city', 'state', 'zip_code', 'budget', 'can_bid']
    })
    .then(post => {
      const postObj = post.serialize();
      return res.json(postObj);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.put('/:id/edit', (req, res) => {
  const getId = req.params.id;

  const { title, description, city, state, zip_code, budget, can_bid } = req.body;

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
    return new Post({ id: getId })
      .fetch({ require: true })
      .then(post => {
        post.save({
          title,
          description,
          city,
          state,
          zip_code,
          budget,
          can_bid
        })
        return res.json({ message: `Information has been updated for Post #${post.id}` });
      })
      .catch(err => {
        return res.status(500).json({ message: err.message, code: err.code });
      });
  }
});


module.exports = router;