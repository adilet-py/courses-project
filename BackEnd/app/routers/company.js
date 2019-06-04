module.exports = (app) => {
    let companyController = require('../controllers/companyController');
    let auth = require('../middleware/auth');
    /**
     * User registration
     */
    app.post('/company/register', companyController.register);
    /**
     * User authorization
     */
    app.post('/company/login', companyController.login);
    /**
     * User forgot password
     */
    app.post('/company/forgot-password', companyController.forgot_password);
    /**
     * Get me
     */
    app.get('/company/me', auth.checkToken, companyController.me);



};