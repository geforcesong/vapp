class BaseRouteManager {
    constructor(app) {
        this.app = app;
    }

    _registerOne(method, path, controller, controllerName = 'loadView') {
        this.app[method](path, controller[controllerName].bind(controller));
    }
}

module.exports = BaseRouteManager;
