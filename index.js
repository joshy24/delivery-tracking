'use strict'

require ("dotenv").config()

const log = require('./modules/logger.module')
const mongoose = require('./modules/mongoose.module')
const express = require("express")

const app = express()

app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({extended: false}));

app.disable('x-powered-by');

//App Config file
const config = require('./config/config');

//Routes Setup
const routes = require("./routes/index.routes")
app.use('/api/v1', routes)

mongoose.connect(config.db.uri, config.db.options)
        .then(()=> { log.info(`Succesfully Connected to the Mongodb Database`)})
        .catch((error)=> { log.error(error)})

module.exports = app;




