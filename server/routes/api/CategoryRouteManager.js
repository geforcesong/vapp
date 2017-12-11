const CategoryController = require('../../../web/controllers/api/categoryController.js');
const BaseRouteManager = require('../BaseRouteManager');

class CategoryRouteManager extends BaseRouteManager {
    constructor(app) {
        super(app);
    }

    register() {
        this._registerOne('get', '/categories', new CategoryController(), 'getCategories');
    }
}

module.exports = CategoryRouteManager;
