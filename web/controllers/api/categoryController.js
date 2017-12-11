const BaseController = require('../baseController');
const CategoryFactory = require('../../fatories/categories/categoryFactory');
class apiCategoryController extends BaseController {
    constructor() {
        super();
    }

    async getCategories(req, res, next) {
        this.initialize(req, res, next);
        const categoryFactory = new CategoryFactory();
        const categories = await categoryFactory.getCategories();
        this.sendJson(categories);
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
