const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    phone: String,
    time: String
}, {
    timestamps: true
});


module.exports = mongoose.model('User', CourseSchema);