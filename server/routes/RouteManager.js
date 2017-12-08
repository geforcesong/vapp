const HomeController = require('../../web/controllers/homeController.js');

class RouteManager {
    static register(app) {
        RouteManager._registerOne(app, '/', new HomeController());
    }

    static _registerOne(app, path, controller, controllerName = 'loadView') {
        app.get(path, controller[controllerName].bind(controller));
    }
}

module.exports = RouteManager;
