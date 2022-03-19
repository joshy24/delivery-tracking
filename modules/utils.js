'use strict'

const { statuses, change_options } = require("../modules/status-options.module")

module.exports.getResponseMessage = (msg, response, data) => {
    return {
        response: response,
        message: msg,
        data: data
    }
}

const isTrackedPackageStatusChangeable = (tracked_package, status_to_change_to) => {

    for(const status in statuses){
        if(status == tracked_package.status){
            if(!change_options[status].includes(status_to_change_to)){
                return false
            }
        }
    }

    return true;
}

module.exports.isTrackedPackageStatusChangeable = isTrackedPackageStatusChangeable;