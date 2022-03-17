'use strict'

const { createPackage, getAllPackages, getPackage, updatePackage, deletePackage } = require("../controllers/package.controller")

module.exports = (router) => {
    router.post("/create_package", (req,res) => {
        createPackage(req,res)
    })

    router.get("/get_all_packages", (req,res) => {
        getAllPackages(req,res)
    })

    router.get("/get_package/:id", (req,res) => {
        getPackage(req,res)
    })

    router.put("/update_package", (req,res) => {
        updatePackage(req,res)
    })

    router.delete("/delete_package/:id", (req,res) => {
        deletePackage(req,res)
    })
}