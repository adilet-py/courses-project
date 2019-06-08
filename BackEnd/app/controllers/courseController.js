const Course = require('../models/Course');
const mongoose = require('mongoose');

exports.create = (req, res) => {
    if(!req.body.course_name) {
        res.status(400).send({
            message: 'Course  is required'
        });
        return;
    }
    if(!req.body.fare) {
        res.status(400).send({
            message: 'Fare  is required'
        });
        return;
    }

    const course = new Course({
        course_name: req.body.course_name,
        fare: req.body.fare,
        description: req.body.description,
        company: req.body.company
    });

    course.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({message: err});
    });
};