const api = require('./api/routes');

module.exports = {
    hooks: {
      express(gasket, app) {
        api(app);
        console.log('test');
      }
    }
  };