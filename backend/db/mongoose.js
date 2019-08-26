const mongoose = require('mongoose');
const {MONGOOSE_URL} = require('./../../config/config.js')

mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});