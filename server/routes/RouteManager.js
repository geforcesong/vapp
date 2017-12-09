const HomeController = require('../../web/controllers/homeController.js');
const AboutController = require('../../web/controllers/aboutController.js');

class RouteManager {
    static register(app) {
        RouteManager._registerOne(app, 'get', '/', new HomeController());
        RouteManager._registerOne(app, 'get', '/about', new AboutController());
    }

    static _registerOne(app, method, path, controller, controllerName = 'loadView') {
        app[method](path, controller[controllerName].bind(controller));
    }
}

module.exports = RouteManager;
