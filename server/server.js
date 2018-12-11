const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;

app.get('/api/smoke', (req, res) => {
    res.send('smoke test');
})

app.post(`/api/login/vendors`, (req, res) => {
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

  app.post(`/api/login/customers`, (req, res) => {
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