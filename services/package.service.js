'use strict'

const TrackedPackage = require("../models/package.model")

module.exports.savePackage = async (data) => {
    try {
        let tracked_package = new TrackedPackage(data)

        tracked_package.created = new Date()

        let saved_package = await tracked_package.save()

        return saved_package;
    }
    catch(err){
        return err
    }
}

module.exports.getPackage = async (id) => {

    try{
        let tracked_package = await TrackedPackage.findOne({_id: id})

        return tracked_package;
    }
    catch(err){
        return err
    }

}

module.exports.getAllPackages = async () => {

    try{
        let tracked_packages = await TrackedPackage.find({}).sort({created: -1}).exec()

        return tracked_packages;
    }
    catch(err){
        return err
    }

}

module.exports.updatePackage = async (id,data) => {

    try{
        let updated_tracked_package = await TrackedPackage.findByIdAndUpdate({_id: id}, data)
        
        return updated_tracked_package;
    }
    catch(err){
        return err
    }

}


module.exports.deletePackage = async (id) => {

    try{
        let deleted_tracked_package = await TrackedPackage.findByIdAndDelete({_id: id})
        
        return deleted_tracked_package;
    }
    catch(err){
        return err
    }

}