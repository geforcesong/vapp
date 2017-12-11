const CategoryController = require('../../../web/controllers/api/categoryController.js');
const BaseRouteManager = require('../BaseRouteManager');

class CategoryRouteManager extends BaseRouteManager {
    constructor(app) {
        super(app);
    }

    register() {
        this._registerOne('get', '/api/categories', new CategoryController(), 'getCategories');
        this._registerOne('post', '/api/categories', new CategoryController(), 'createCategory');
        this._registerOne('put', '/api/categories/:id', new CategoryController(), 'updateCategory');
        this._registerOne('delete', '/api/categories/:id', new CategoryController(), 'deleteCategory');
    }
}

module.exports = CategoryRouteManager;
