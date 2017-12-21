const HomeController = require('../../web/controllers/homeController.js');
const AboutController = require('../../web/controllers/aboutController.js');
const AdminController = require('../../web/controllers/adminController.js');
const BaseRouteManager = require('./BaseRouteManager');
const CategoryRouteManager = require('./api/CategoryRouteManager');
const ProductRouteManager = require('./api/ProductRouteManager');

class RouteManager extends BaseRouteManager {
    constructor(app) {
        super(app);
    }

    register() {
        this._registerOne('get', '/', new HomeController());
        this._registerOne('get', '/about', new AboutController());
        this._registerOne('get', /admin[a-z\/]*/, new AdminController());
        this.registerForAPI();
    }

    registerForAPI() {
        new CategoryRouteManager(this.app).register();
        new ProductRouteManager(this.app).register();
    }
}

module.exports = RouteManager;
