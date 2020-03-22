const modelsController = require('./contollers/models');

module.exports = (app) => {

    app.get('/api/models/:id', modelsController.fetch);
    app.get('/api/healthcheck', (req, res) => res.send('yo!'));
}