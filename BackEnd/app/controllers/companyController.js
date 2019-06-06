require('dotenv').config();
const Company = require('../models/Company');
const async = require('async');
const crypto = require('crypto');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');


let email = process.env.MAILER_EMAIL_ID || '';
let pass = process.env.MAILER_PASSWORD || '';

let smtpTransport = nodemailer.createTransport({
    service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
    auth: {
        user: email,
        pass: pass
    }
});


let handlebarsOptions = {
    viewEngine: {
        extName: '.html',
        partialsDir: path.resolve('./app/templates/'),
        layoutsDir: path.resolve('./app/templates/'),
        defaultLayout: 'forgot-password-email.html',
    },
    viewPath: path.resolve('./app/templates/'),
    extName: '.html'
};

smtpTransport.use('compile', hbs(handlebarsOptions));

exports.register = (req, res) => {

    if(!req.body.email) {
        res.status(400).send({
            message: 'Email is required'
        });
        return;
    }
    if(!req.body.password) {
        res.status(400).send({
            message: 'Password is required'
        });
        return;
    }

    const company = new Company({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password,
        company_name:req.body.company_name
    });

    company.save().then(data => {
        company.getToken(data, (companyWithToken) => {
            res.send(companyWithToken);
        });
    }).catch(err => {
        if(err.code === 11000) {
            res.status(400).send({message: "Email is already exists"});
        }
        res.status(500).send({message: err});
    });
};

exports.login = (req, res) => {
    if(!req.body.email) {
        res.status(400).send({
            message: 'Email is required'
        });
        return;
    }
    if(!req.body.password) {
        res.status(400).send({
            message: 'Password is required'
        });
        return;
    }

    Company.findOne({email: req.body.email}).then(data => {
        data.compareHash(req.body.password, function (companyWithToken) {
            res.send(companyWithToken);
        }, function () {
            res.status(400).send({
                message: "wrong email or password"
            });
        });
    }).catch(err => {
        res.status(400).send({
            message: "wrong email or password"
        })
        return;
    });
};


exports.forgot_password = function(req, res) {
    async.waterfall([
        function(done) {
            Company.findOne({
                email: req.body.email
            }).exec(function(err, company) {
                if (company) {
                    done(err, company);
                } else {
                    done('Company not found.');
                }
            });
        },
        function(company, done) {
            crypto.randomBytes(20, function(err, buffer) {
                var token = buffer.toString('hex');
                done(err, company, token);
            });
        },
        function(company, token, done) {
            Company.findByIdAndUpdate({ _id: company._id }, { reset_password_token: token, reset_password_expires: Date.now() + 86400000 }, { upsert: true, new: true }).exec(function(err, new_company) {
                done(err, token, new_company);
            });
        },
        function(token, company, done) {
            let data = {
                to: company.email,
                from: email,
                template: 'forgot-password-email',
                subject: 'You forgot your password!',
                context: {
                    url: 'http://localhost:3000/reset_password?token=' + token + '&email' + company.email,
                    name: company.company_name
                }
            };

            smtpTransport.sendMail(data, function(err) {
                if (!err) {
                    return res.json({ message: 'Kindly check your email for further instructions' });
                } else {
                    return done(err);
                }
            });
        }
    ], function(err) {
        return res.status(422).json({ message: err });
    });
};

exports.me = (req, res) => {
    Company.findById(req.companyId).populate('courses').exec(function(err, company) {
        if (company) {
            console.log('Company', company);
            res.send({
                me: {
                    id: company.id,
                    profile_image: company.profile_image || '',
                    phone: company.phone || '',
                    company_name: company.company_name || '',
                    email: company.email || '',
                    courses: company.courses
                }
            })
        } else {
            res.status(400).send({
                message: 'Company not found'
            });
        }
    });
};

