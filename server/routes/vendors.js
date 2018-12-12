const express = require('express');
const router = express.Router();
const validator = require('validator');
const Vendor = require('../db/Models/Vendor');


router.get('/smoke', (req, res) => {
    res.send('smoke test for vendors route');
})

router.post('/', (req, res) => {
    let { first_name, last_name, company_name, email, password, street_address, city, state, zip_code, photo, website, description, phone_number, license_number } = req.body
    const parseZip = parseInt(zip_code);
    const parsePhone = parseInt(phone_number)
    return new Vendor({
        first_name,
        last_name,
        company_name,
        email,
        phone_number: parsePhone,
        password,
        street_address,
        city,
        state,
        zip_code: parseZip,
        photo,
        website,
        description,
        license_number
    })
        .save()
        .then(() => {
            console.log('route');
        })
})


module.exports = router;