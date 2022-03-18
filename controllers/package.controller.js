'use strict'

const { savePackage, getAllPackages, getPackage, updatePackage } = require("../services/package.service");

const { getResponseMessage } = require("../modules/utils")

//const log = require("../modules/logger.module")

module.exports.createPackage = async (req,res) => {
    const { content, pick_up_address, destination_address } = req.body;

    try{
        let saved_package = await savePackage({ content, pick_up_address, destination_address })

        return res.status(200).json(getResponseMessage("", "success", saved_package));
    }
    catch(err){
        log.error(err)
        return res.status(500).json(getResponseMessage(err.message, "server error", {}));
    }
}

module.exports.getAllPackages = async (req,res) => {
    
    try{
        let all_packages = await getAllPackages()

        return res.status(200).json(getResponseMessage("", "success", all_packages));
    }
    catch(err){
        log.error(err)
        return res.status(500).json(getResponseMessage(err.message, "server error", {}));
    }

}

module.exports.getPackage = async (req,res) => {
    const { id } = req.body;

    try{
        let tracked_package = await getPackage(id)

        return res.status(200).json(getResponseMessage("", "success", tracked_package));
    }
    catch(err){
        log.error(err)
        return res.status(500).json(getResponseMessage(err.message, "server error", {}));
    }

}

module.exports.updatePackage = async (req,res) => {
    const { _id, status, content, pick_up_address, destination_address } = req.params

    try{
        let updated_package = await updatePackage(_id, { status, content, pick_up_address, destination_address } )

        return res.status(200).json(getResponseMessage("", "success", updated_package));
    }
    catch(err){
        log.error(err)
        return res.status(500).json(getResponseMessage(err.message, "server error", {}));
    }
}

module.exports.deletePackage = async (req,res) => {

}