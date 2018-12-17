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
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
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
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
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
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
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
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/clothing', (req, res) => {

  return new Post()
    .where({ category_id: 5 })
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
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
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
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
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
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
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/cleaning', (req, res) => {

  return new Post()
    .where({ category_id: 9 })
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.get('/food', (req, res) => {

  return new Post()
    .where({ category_id: 10 })
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
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
    .where({ category_id: 11 })
    .fetchAll({
      withRelated: ['postStatusId', 'postPriorityId']
    })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

module.exports = router;