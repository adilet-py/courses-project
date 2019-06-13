const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    phone: String,
    date: String,
    time: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('User', CourseSchema);