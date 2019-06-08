const mongoose = require('mongoose');
const Company = require('./Company');

const CourseSchema = mongoose.Schema({
    course_name: {
        type:String,
        unique:true,
        required:true
    },
    fare: String,
    description: String,
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Course', CourseSchema);