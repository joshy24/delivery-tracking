
const statuses = {
    PICKED_UP: "PICKED_UP",
    IN_TRANSIT: "IN_TRANSIT",
    WARE_HOUSE: "WARE_HOUSE",
    DELIVERED: "DELIVERED"
}

module.exports.status_options =  [statuses.PICKED_UP, statuses.IN_TRANSIT, statuses.WARE_HOUSE, statuses.DELIVERED]

module.exports.changeable_options = [statuses.IN_TRANSIT, statuses.WARE_HOUSE]

module.exports.default_option = statuses.PICKED_UP