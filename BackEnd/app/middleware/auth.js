const jwt = require('jsonwebtoken');
const key = require('../../config/key.conf');

exports.checkToken = (req, res, next) => {
    let token = '';
    if(req.headers['authorization']) {
        token = req.headers['authorization'].slice(7, req.headers['authorization'].length);
    }

    if(token) {
        jwt.verify(token, key.appKey, (err, decoded) => {
            if(err) {
                res.status(421).send({
                    message: 'Token is invalid'
                });
            } else {
                console.log(decoded);
                req.companyId = decoded.companyId;
                next();
            }
        });
    } else {
        res.status(421).send({
            message: 'Token is not provided'
        });
    }
};