const express = require('express');
const router = express.Router();
const validator = require('validator');


router.get('/smoke', (req, res) => {
    res.send('smoke test for customers route');
});


module.exports = router;