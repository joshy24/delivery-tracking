
const bluebird = require('bluebird')

const mongoose = require('mongoose');

mongoose.Promise = bluebird;

module.exports = mongoose;