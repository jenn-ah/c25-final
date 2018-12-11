const express = require('express');
const router = express.Router();


router.get('/smoke', (req, res) => {
    res.send('smoke test on categories route');
})


module.exports = router;