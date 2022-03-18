const { body,param } = require("express-validator")
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
    param("status")
        .exists({checkFalsy: true, checkNull: true})
        .withMessage('Please enter a destination_address for the package')
        .bail()
        .not()
        .isIn(status_options)
        .withMessage('Invalid status entered')
        .bail()
        .custom(async (value, {req}) => {
        
            try{
                let tracked_package = await getPackage(req.param._id)

                if(!tracked_package)
                    throw new Error(`Package not found`)

                if(tracked_package.status != value){
                    
                    let isiChangeable = isTrackedPackageStatusChangeable(tracked_package, value) //We check if we can change the status of the package to the status in the request

                    if(!isiChangeable){
                        throw new Error(`Cant change status of package to ${req.param.status}`);
                    }
                }
            }
            catch(err){
                throw new Error(err.message);
            }

            // Indicates the success of this synchronous custom validator
            return true;
        }),

    param("content")
        .trim()
        .escape()
        .exists({checkFalsy: true, checkNull: true})
        .isLength({min: 2, max: 1000}),

    param("pick_up_address")
        .trim()
        .escape()
        .exists({checkFalsy: true, checkNull: true})
        .isLength({min: 2, max: 1000}),
        
    param("destination_address")
        .trim()
        .escape()
        .exists({checkFalsy: true, checkNull: true})
        .isLength({min: 2, max: 1000})
]
