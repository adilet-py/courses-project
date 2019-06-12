const User = require('../models/User');

exports.create = (req, res) => {
    if(!req.body.first_name) {
        res.status(400).send({
            message: 'First name  is required'
        });
        return;
    }
    if(!req.body.last_name) {
        res.status(400).send({
            message: 'Last name  is required'
        });
        return;
    }

    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        time: req.body.time,
        course: req.body.course
    });

    user.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({message: err});
    });
};