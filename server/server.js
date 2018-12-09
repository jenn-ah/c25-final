const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;


app.listen(PORT, () => {
    process.stdout.write(`Server listening on port: ${PORT}`);
});