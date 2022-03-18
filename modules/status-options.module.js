
const statuses = {
    PICKED_UP: "PICKED_UP",
    IN_TRANSIT: "IN_TRANSIT",
    WARE_HOUSE: "WARE_HOUSE",
    DELIVERED: "DELIVERED"
}

const change_options = {
    PICKED_UP: [statuses.IN_TRANSIT],
    IN_TRANSIT: [statuses.DELIVERED, statuses.WARE_HOUSE],
    WARE_HOUSE: [statuses.IN_TRANSIT],
    DELIVERED: [],
}

module.exports.statuses = statuses;

module.exports.status_options =  [statuses.PICKED_UP, statuses.IN_TRANSIT, statuses.WARE_HOUSE, statuses.DELIVERED]

module.exports.default_option = statuses.PICKED_UP

module.exports.change_options = change_options;