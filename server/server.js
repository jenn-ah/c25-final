const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.EXPRESS_HOST_PORT || 8989;

const categoriesRouter = require('./routes/categories');
const customersRouter = require('./routes/customers');
const postsRouter = require('./routes/posts');
const vendorsRouter = require('./routes/vendors');


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/categories', categoriesRouter);
app.use('/api/customers', customersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/vendors', vendorsRouter);


app.post(`/api/vendors`, (req, res) => {
    let ={company_name, password, id, first_name, last_name, email, street_address, city, state, zip_code, phone_number, photo, website, description, license_number }=req.body
    return new Vendor()
    .where({ company_name: company_name })
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

  app.post(`/api/customers`, (req, res) => {
    let ={username, password, id, email, first_name, last_name, city, state, zip_code, }=req.body
    return new Customer()
    .where({ username: username })
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
  })
  







app.listen(PORT, () => {
    process.stdout.write(`Server listening on port: ${PORT}`);
});