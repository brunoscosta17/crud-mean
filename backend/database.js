const mongoose = require('mongoose');

const URI = 'mongodb://localhost/crud-mean';

mongoose.connect(URI)
    .then(db => console.log('Conectado ao DB'))
    .catch(err => console.error(err));

module.exports = mongoose;