module.exports = (app) => {
    let courseController = require('../controllers/courseController');
    let auth = require('../middleware/auth');
    /**
     * Course create
     */
    app.post('/course/create', auth.checkToken, courseController.create);

    /**
     * Get course
     */
    app.get('/course/:id', courseController.getCourse);

}