const { isTrackedPackageStatusChangeable } = require("../modules/utils")
//const { createValidator, updateValidator, deletePackageValidator, getPackageValidator } = require("../validators/package.validator")
const { statuses } = require("../modules/status-options.module")


describe("Testing status of packages", () => {
    test("Check if the status of a package can be in the PICKED_UP state more than once ", () => {

        let response = isTrackedPackageStatusChangeable({
            _id: "is8du8weuweinfeufnoefois",
            status: statuses.IN_TRANSIT,
            content: "Some test content",
            pick_up_address: "Some test address",
            destination_address: "Some destination address"
        }, statuses.PICKED_UP)
        
        expect(response).toEqual(false)

    })

    test("Check if the status of a package can be in the DELIVERED state more than once using IN_TRANSIT", () => {

        let response = isTrackedPackageStatusChangeable({
            _id: "is8du8weuweinfeufnoefois",
            status: statuses.DELIVERED,
            content: "Some test content",
            pick_up_address: "Some test address",
            destination_address: "Some destination address"
        }, statuses.IN_TRANSIT)
        
        expect(response).toEqual(false)

    })

    test("Check if the status of a package can be in the DELIVERED state more than once using WARE_HOUSE ", () => {

        let response = isTrackedPackageStatusChangeable({
            _id: "is8du8weuweinfeufnoefois",
            status: statuses.DELIVERED,
            content: "Some test content",
            pick_up_address: "Some test address",
            destination_address: "Some destination address"
        }, statuses.WARE_HOUSE)
        
        expect(response).toEqual(false)

    })

    test("Check if the status of a package can be in the IN_TRANSIT state more than once ", () => {

        let response = isTrackedPackageStatusChangeable({
            _id: "is8du8weuweinfeufnoefois",
            status: statuses.WARE_HOUSE,
            content: "Some test content",
            pick_up_address: "Some test address",
            destination_address: "Some destination address"
        }, statuses.IN_TRANSIT)
        
        expect(response).toEqual(true)
    })

    test("Check if the status of a package can be in the WARE_HOUSE state more than once ", () => {

        let response = isTrackedPackageStatusChangeable({
            _id: "is8du8weuweinfeufnoefois",
            status: statuses.IN_TRANSIT,
            content: "Some test content",
            pick_up_address: "Some test address",
            destination_address: "Some destination address"
        }, statuses.WARE_HOUSE)
        
        expect(response).toEqual(true)
    })

    test("Check if the status of a package can be switched from PICKED_UP state to DELIVERED", () => {

        let response = isTrackedPackageStatusChangeable({
            _id: "is8du8weuweinfeufnoefois",
            status: statuses.PICKED_UP,
            content: "Some test content",
            pick_up_address: "Some test address",
            destination_address: "Some destination address"
        }, statuses.DELIVERED)
        
        expect(response).toEqual(false)
    })

    test("Check if the status of a package can be switched from DELIVERED state to PICKED_UP", () => {

        let response = isTrackedPackageStatusChangeable({
            _id: "is8du8weuweinfeufnoefois",
            status: statuses.DELIVERED,
            content: "Some test content",
            pick_up_address: "Some test address",
            destination_address: "Some destination address"
        }, statuses.PICKED_UP)
        
        expect(response).toEqual(false)
    })
})






