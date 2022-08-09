const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('nodemailer-express-handlebars');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

require('./app/controllers/index')(app);

app.listen(3000, () => {
    console.log('Server open in the door 3000')
});