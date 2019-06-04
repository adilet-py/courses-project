const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    course_name: {
        type:String,
        unique:true,
        required:true
    },
    fare: String,
    description: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Course', CourseSchema);