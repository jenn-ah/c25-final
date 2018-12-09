const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;

const customersRouter = require('./routes/customers');
const vendorsRouter = require('./routes/vendors');
const postsRouter = require('./routes/posts');
const bodyParser = require('body-parser');

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/customers', customersRouter);
app.use('/api/vendors', vendorsRouter);
app.use('/api/posts', postsRouter);


app.listen(PORT, () => {
    process.stdout.write(`Server listening on port: ${PORT}`);
});