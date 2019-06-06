module.exports = (app) => {
    let userController = require('../controllers/userController');

    /**
     * User create
     */
    app.post('/user/create', userController.create)

}