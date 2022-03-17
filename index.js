'use strict'

require ("dotenv").config()

const express = require("express")

const log = require('./modules/logger.module')
const mongoose = require('./modules/mongoose.module')

const app = express()

app.use(express.json({ type: 'application/json', limit: '8mb' }));
app.use(express.urlencoded({limit: '8mb', extended: false}));

app.disable('x-powered-by');

const config = require('./config/config');


//Routes Setup
const routes = require("./routes/index.routes")

app.use('/api/v1', routes)


//Setup port from environment or default
const port = process.env.PORT || 4000

app.listen(port, () => {
    log.info(`Server is running on port ${port}`)

    /*mongoose.connect(config.db.uri, config.db.options)
        .then(()=> { log.info(`Succesfully Connected to the Mongodb Database  at URL : `+config.db.uri)})
        .catch((error)=> { log.error(error)})*/
})


