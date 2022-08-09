const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection;

module.exports =  mongoose;