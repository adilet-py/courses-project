const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = require('../../config/key.conf');

const CompanySchema = mongoose.Schema({
    company_name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile_image: String,
    phone: String,
    reset_password_token: {
        type: String
    },
    reset_password_expires: {
        type: Date
    }
}, {
    timestamps: true
});

CompanySchema.methods.getToken = function(company, next) {
    let token = jwt.sign({companyId: company._id}, key.appKey);
    next({
        token: `Bearer ${token}`,
        email: company.email
    });
};

CompanySchema.methods.compareHash = function(password, next, err) {
    let valid = bcrypt.compareSync(password, this.password);
    if(valid) {
        console.log('this', this);
        this.getToken(this, (companyWithToken) => {
            next(companyWithToken);
        });
    } else {
        err('Wrong email or password');
    }
}

CompanySchema.pre('save', function (next) {
    let company = this;
    bcrypt.hash(company.password, 10).then((hashedPassword) => {
        company.password = hashedPassword;
        next();
    });
});

module.exports = mongoose.model('Company', CompanySchema);