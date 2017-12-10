const HomeController = require('../../web/controllers/homeController.js');
const AboutController = require('../../web/controllers/aboutController.js');
const AdminController = require('../../web/controllers/adminController.js');

class RouteManager {
    static register(app) {
        RouteManager._registerOne(app, 'get', '/', new HomeController());
        RouteManager._registerOne(app, 'get', '/about', new AboutController());
        RouteManager._registerOne(app, 'get', '/admin', new AdminController());
    }

    static _registerOne(app, method, path, controller, controllerName = 'loadView') {
        app[method](path, controller[controllerName].bind(controller));
    }
}

module.exports = RouteManager;
