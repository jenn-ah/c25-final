const express = require('express');
const router = express.Router();
const validator = require('validator');


router.get('/smoke', (req, res) => {
    res.send('smoke test for vendors route');
})


module.exports = router;