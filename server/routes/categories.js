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
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const automotive = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 1;
      });
      return res.send(automotive);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/electrical', (req, res) => {
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const electrical = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 2;
      });
      return res.send(electrical);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/plumbing', (req, res) => {
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const plumbing = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 3;
      });
      return res.send(plumbing);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/landscaping', (req, res) => {
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const landscaping = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 4;
      });
      return res.send(landscaping);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/tailoring', (req, res) => {
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const tailoring = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 5;
      });
      return res.send(tailoring);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/childcare', (req, res) => {
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const childCare = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 6;
      });
      return res.send(childCare);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.get('/painting', (req, res) => {
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const painting = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 7;
      });
      return res.send(painting);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.get('/carpentry', (req, res) => {
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const carpentry = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 8;
      });
      return res.send(carpentry);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get('/pressurewash', (req, res) => {
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const pressureWash = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 9;
      });
      return res.send(pressureWash);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});


router.get('/other', (req, res) => {
  return Post.fetchAll({
    withRelated: ['categoryId', 'customerId', 'postStatusId', 'postPriorityId']
  })
    .then(posts => {
      const results = posts.toJSON();
      const other = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 10;
      });
      return res.send(other);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

module.exports = router;