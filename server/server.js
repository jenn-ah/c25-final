const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;
const Customer = require("./db/Models/Customer");
const Vendor = require("./db/Models/Vendor");

const categoriesRouter = require('./routes/categories');
const customersRouter = require('./routes/customers');
const postsRouter = require('./routes/posts');
const vendorsRouter = require('./routes/vendors');

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/categories', categoriesRouter);
app.use('/api/customers', customersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/vendors', vendorsRouter);


app.post(`/api/vendors/login`, (req, res) => {
    let ={company_name, password, id, first_name, last_name, email, street_address, city, state, zip_code, phone_number, photo, website, description, license_number }=req.body
    return new Vendor()
    .where({ company_name: company_name, password: password })
    .fetch({
      columns: ["company_name", "password", "id", "first_name", "last_name", "email", "street_address", "city", "state", "zip_code", "phone_number", "photo", "website", "description", "license_number"]
    })
    .then(data => {
      if (!data) {
        return res.status(401).json({ message: `Company name or password incorrect` })
      } else {
        const vendor = data.toJSON();
        return res.send(vendor)
      }
    })
  })

  app.post(`/api/login`, (req, res) => {
    let ={username, password, id, email, first_name, last_name, city, state, zip_code, }=req.body
    return new Customer()
    .where({ username: username, password: password})
    .fetch({
      columns: ["username", "password", "id", "email", "first_name", "last_name", "city", "state", "zip_code"]
    })
    .then(data => {
      if (!data) {
        return res.status(401).json({ message: `Username or password incorrect` })
      } else {
        const customer = data.toJSON();
        return res.send(customer)
      }
    })
    .catch(err=>{
      return res.send('Username or password is incorrect')
    })
  })
  
app.get('/smoke', (req, res)=>{
  res.send('smoke test')
})






app.listen(PORT, () => {
    process.stdout.write(`Server listening on port: ${PORT}`);
});