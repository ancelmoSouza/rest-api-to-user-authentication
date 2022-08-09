const path = require('path');
const mailer = require('nodemailer');
const exphbs = require('express-handlebars');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass} = require('../config/mail.json');

const transport = mailer.createTransport({
    host,
    port,
    auth: { user, pass},
  });

transport.use(
    'compile',
    hbs({
        viewEngine: exphbs.create({
            defaultLayout: false,
            extname: '.html',
        }),
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
})); 

module.exports = transport;