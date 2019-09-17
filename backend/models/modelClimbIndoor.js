const mongoose = require('mongoose');

const routeClimbIndoor = mongoose.model("routeClimbIndoor" , {
    dateLog: {
        type: Date,
        require: true,
        default:Date.now
    },
    typeClimbing: {
        type: String,
        required: true
    },
    typeRoute: {
        type: String,
        required: true
    },
    locationRoute: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true
    },
    styleClimbing: {
        type: String,
        required: true
    },
    comment: {
        type: String
    }


});

module.exports = routeClimbIndoor;