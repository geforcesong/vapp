const BaseController = require('../baseController');

class apiCategoryController extends BaseController {
    constructor() {
        super();
    }

    getCategories(req, res, next) {
        this.initialize(req, res, next);
        this.sendJson({categories: 1});
    }

    createCategory(req, res, next) {
        this.initialize(req, res, next);
        this.sendJson({categories: 2});
    }

    updateCategory(req, res, next) {
        this.initialize(req, res, next);
        this.sendJson({categories: 3});
    }

    deleteCategory(req, res, next) {
        this.initialize(req, res, next);
        this.sendJson({categories: 4});
    }
}

module.exports = apiCategoryController;
