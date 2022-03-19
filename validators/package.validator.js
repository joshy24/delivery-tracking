const { body,param, check } = require("express-validator")
const { status_options } = require("../modules/status-options.module")
const { isTrackedPackageStatusChangeable } = require("../modules/utils")
const { getPackage } = require("../services/package.service")

module.exports.createValidator = [
    body("content")
        .trim()
        .escape()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Please enter valid content for the package')
        .bail()
        .isLength({max: 1000})
        .withMessage('Please enter valid content for the package of length 2 - 1000 characters long')
        .bail(),

    body("pick_up_address")
        .trim() 
        .escape()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Please enter a pickup_address for the package')
        .bail()
        .isLength({max: 1000})
        .withMessage('The pickup address you entered may be too long')
        .bail(),

    body("destination_address")
        .trim() 
        .escape()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Please enter a destination_address for the package')
        .bail()
        .isLength({max: 1000})
        .withMessage('The destination address you entered may be too long')
        .bail(),  
];

module.exports.updateValidator = [
    body("_id")
        .trim()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Invalid _id passed, _id field must be present')
        .bail()
        .isLength({min: 20, max: 30})
        .withMessage('Invalid _id passed, max length exceeded')
        .bail(),

    body("status")
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Please enter a valid status for the package')
        .bail()
        .isIn(status_options)
        .withMessage('Invalid status entered')
        .bail()
        .custom(async (value, {req}) => {
            try{
                let tracked_package = await getPackage(req.body._id)

                if(!tracked_package)
                    throw new Error(`Package not found`)

                if(tracked_package.status != value){
                    
                    //We check if we can change the status of the package to the status in the request
                    let isiChangeable = isTrackedPackageStatusChangeable(tracked_package, value) 

                    if(!isiChangeable){
                        throw new Error(`Cant change status of package to ${req.body.status}`);
                    }
                }
            }
            catch(err){
                throw new Error(err.message);
            }

            // Indicates the success of this synchronous custom validator
            return true;
        }),

    body("content")
        .trim()
        .escape()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Invalid content entered')
        .bail()
        .isLength({min: 2, max: 1000})
        .withMessage('Invalid content entered')
        .bail(),

    body("pick_up_address")
        .trim()
        .escape()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Invalid pick_up_address passed')
        .bail()
        .isLength({min: 2, max: 1000})
        .withMessage('The pick_up_address passed is too long')
        .bail(),
        
    body("destination_address")
        .trim()
        .escape()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Invalid destination_address passed')
        .bail()
        .isLength({min: 2, max: 1000})
        .withMessage('The destination_address passed is too long')
        .bail()
]

module.exports.getPackageValidator = [
    param("_id")
        .trim()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Invalid _id passed')
        .bail()
        .isLength({min: 20, max: 30})
        .withMessage('Invalid _id passed')
        .bail()
]

module.exports.deletePackageValidator = [
    param("_id")
        .trim()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Invalid _id passed')
        .bail()
        .isLength({min: 20, max: 30})
        .withMessage('Invalid _id passed, _id wrong length')
        .bail()
]