const mongoose = require('mongoose');

const routeClimbOutdoor = mongoose.model("routeClimbOutdoor" , {
    dateLog: {
        type: Date,
        require: true,
        default:Date.now
    },
    typeLogClimbs: {
        type: String,
        required: true
    },
    styleRoute: {
        type: String,
        required: true
    },
    locationRoute: {
        type: [{
            mountains: {
                type: String,
                required: true,
            },
            valley: {
                type: String,
                required: true,
            },
            peak: {
                type: String,
                required: true,
            }
        }]
    },
    difficulty: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    crew: {
        type: String,
        required: true
    },
    comment: {
        type: String
    }

});

module.exports = routeClimbOutdoor;