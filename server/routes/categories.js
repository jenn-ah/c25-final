const express = require('express');
const router = express.Router();
const Category = require('../db/Models/Category');
const Post = require('../db/Models/Post');


router.get('/', (req, res) => {
  return Category.fetchAll()
    .then(cats => {
      return res.json(cats);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.get('/automotive', (req, res) => {

  return new Post()
    .where({ category_id: 1 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/electrical', (req, res) => {

  return new Post()
    .where({ category_id: 2 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/plumbing', (req, res) => {

  return new Post()
    .where({ category_id: 3 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/landscaping', (req, res) => {

  return new Post()
    .where({ category_id: 4 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/tailoring', (req, res) => {

  return new Post()
    .where({ category_id: 5 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/childcare', (req, res) => {

  return new Post()
    .where({ category_id: 6 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.get('/painting', (req, res) => {

  return new Post()
    .where({ category_id: 7 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.get('/carpentry', (req, res) => {

  return new Post()
    .where({ category_id: 8 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/pressurewash', (req, res) => {

  return new Post()
    .where({ category_id: 9 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.get('/other', (req, res) => {

  return new Post()
    .where({ category_id: 10 })
    .fetch({
      withRelated: ['customerId', 'postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

module.exports = router;