const mongoose = require('mongoose');

const routeClimb = mongoose.model("routeClimb" , {
    typeRoute: {
        type: String,
        required: true
    },
    locationRoute: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    }
});

module.exports = routeClimb;