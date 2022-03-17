'use strict'

const  {status_options, default_option} = require("../modules/status-options.module")

const mongoose = require('../modules/mongoose.module')

const Schema = mongoose.Schema;

const MODEL_NAME = "Package"

const schema = new Schema({
    status: {
        type: String,
        enum: status_options,
        default: default_option
    },
    content: {
        minlength: 2,
        maxlength: 2000,
        required: true,
        type: String,
    },
    departed_date: {
        type: Date
    },
    arrived_date: {
        type: Date
    }
})

schema.index({email: 1, firstname: "text", lastname: "text"}, {unique:true});


module.exports = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);