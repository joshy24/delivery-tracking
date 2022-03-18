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

    /*switch(tracked_package.status){
        case statuses.PICKED_UP:
            if(!change_options.PICKED_UP.includes(status_to_change_to)){
                return false
            }
        break;
        case status_options[1]:
        break;
        case status_options[2]:
        break;
        case status_options[3]:
        break;
    }*/

    return true;
}

module.exports.isTrackedPackageStatusChangeable = isTrackedPackageStatusChangeable;