    module.exports = (app) => {
        let courseController = require('../controllers/courseController');
    
    /**
     * Course create
     */

    app.post('/course/create', courseController.create)

    }