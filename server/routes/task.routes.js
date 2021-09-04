const TaskController = require('../controllers/task.controller');


module.exports = (app) => {
    app.get('/api/tasks',TaskController.index);
    app.post('/api/tasks',TaskController.create);
    app.get('/api/tasks/:id',TaskController.show);
    app.put('/api/tasks/:id',TaskController.update);
    app.delete('/api/tasks/:id',TaskController.destroy);
}