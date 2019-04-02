const express = require('express');
const bodyParser = require('body-parser');
const exphbs =require('express-handlebars');

const app =express();

const port = process.env.Port || 5000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});