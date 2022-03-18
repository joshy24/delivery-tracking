'use strict'

const { createPackage, getAllPackages, getPackage, updatePackage, deletePackage } = require("../controllers/package.controller")
const { createValidator, updateValidator } = require("../validators/package.validator")
const validateRequestSchema = require("../middleware/validaterequestschema.middleware")

module.exports = (router) => {
    router.post("/create_package", createValidator, validateRequestSchema, (req,res) => {
        createPackage(req,res)
    }) 

    router.get("/get_all_packages", validateRequestSchema, (req,res) => {
        getAllPackages(req,res)
    })

    router.get("/get_package/:id", (req,res) => {
        getPackage(req,res)
    })

    router.put("/update_package", updateValidator, validateRequestSchema, (req,res) => {
        updatePackage(req,res)
    })

    router.delete("/delete_package/:id", (req,res) => {
        deletePackage(req,res)
    })
}