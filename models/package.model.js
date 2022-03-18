'use strict'

const  {status_options, default_option} = require("../modules/status-options.module")

const mongoose = require('../modules/mongoose.module')

const Schema = mongoose.Schema;

const MODEL_NAME = "TrackedPackage"

const schema = new Schema({
    status: {
        type: String,
        enum: status_options,
        default: default_option,
        required: true
    },
    content: {
        minlength: 2,
        maxlength: 1000,
        required: true,
        type: String,
    },
    created: {
        type: Date,
        required: true,
        default: new Date()
    },
    pick_up_address: {
        type: String,
        required: true,
        maxlength: 1000,
        minlength: 5
    },
    destination_address: {
        type: String,
        required: true,
        maxlength: 1000,
        minlength: 5
    }
})

module.exports = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);