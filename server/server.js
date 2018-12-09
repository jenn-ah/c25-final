const express = require("express");
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;

app.get('/smoke', (req, res) => {
    res.send('smoke test');
})

app.listen(PORT, () => {
    process.stdout.write(`Server listening on port: ${PORT}`);
  });