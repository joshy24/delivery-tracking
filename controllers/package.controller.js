'use strict'

const { savePackage, getAllPackages, getPackage, updatePackage, deletePackage } = require("../services/package.service");

const { getResponseMessage } = require("../modules/utils")

//const log = require("../modules/logger.module")

module.exports.createPackage = async (req,res) => {
    const { content, pick_up_address, destination_address } = req.body;

    try{
        let saved_package = await savePackage({ content, pick_up_address, destination_address })

        if(saved_package){
            return res.status(200).json(getResponseMessage("", "success", saved_package));
        }
        else{
            return res.status(404).json(getResponseMessage("", "not_saved", {}));
        }
    }
    catch(err){
        log.error(err)
        return res.status(500).json(getResponseMessage(err.message, "server error", {}));
    }
}

module.exports.getAllPackages = async (req,res) => {
    
    try{
        let all_packages = await getAllPackages()

        if(all_packages){
            return res.status(200).json(getResponseMessage("", "success", all_packages));
        }
        else{
            return res.status(404).json(getResponseMessage("", "not_found", {}));
        }
    }
    catch(err){
        log.error(err)
        return res.status(500).json(getResponseMessage(err.message, "server error", {}));
    }

}

module.exports.getPackage = async (req,res) => {
    const { _id } = req.params;

    try{
        let tracked_package = await getPackage(_id)
        
        if(tracked_package){
            return res.status(200).json(getResponseMessage("", "success", tracked_package));
        }
        else{
            return res.status(404).json(getResponseMessage("", "not_found", {}));
        }
    }
    catch(err){
        log.error(err)
        return res.status(500).json(getResponseMessage(err.message, "server error", {}));
    }
}

module.exports.updatePackage = async (req,res) => {
    const { _id, status, content, pick_up_address, destination_address } = req.body

    try{
        let updated_package = await updatePackage(_id, { status, content, pick_up_address, destination_address } )

        if(updated_package){
            return res.status(200).json(getResponseMessage("", "success", updated_package));
        }
        else{
            return res.status(404).json(getResponseMessage("", "not_found", {}));
        }
    }
    catch(err){
        log.error(err)
        return res.status(500).json(getResponseMessage(err.message, "server error", {}));
    }
}

module.exports.deletePackage = async (req,res) => {
    const { _id } = req.params;

    try{
        let deleted_package = await deletePackage(_id)
        
        if(deleted_package){
            return res.status(200).json(getResponseMessage("", "success", deleted_package));
        }
        else{
            return res.status(404).json(getResponseMessage("", "not_found", {}));
        }
    }
    catch(err){
        log.error(err)
        return res.status(500).json(getResponseMessage(err.message, "server error", {}));
    }
}