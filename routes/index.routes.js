'use strict'

const express = require("express")

const router = express.Router();

require("./package.routes")(router)

module.exports = router;