module.exports = (app) => {
    let companyController = require('../controllers/companyController');
    let auth = require('../middleware/auth');

    /**
     * Company registration
     */
    app.post('/company/register', companyController.register);

    /**
     * Company authorization
     */
    app.post('/company/login', companyController.login);

    /**
     * Company forgot password
     */
    app.post('/company/forgot-password', companyController.forgot_password);

    /**
     * Get me
     */
    app.get('/company/me', auth.checkToken, companyController.me);

    /**
     * Get companies
     */
    app.get('/company/all', companyController.all);


};