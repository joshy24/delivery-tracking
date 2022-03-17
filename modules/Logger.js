const bunyan = require('bunyan');

const log = bunyan.createLogger({name: "delivery-tracker"});

module.exports = log;