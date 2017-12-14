const BaseController = require('../baseController');
const CategoryFactory = require('../../fatories/categories/categoryFactory');
class apiCategoryController extends BaseController {
    constructor() {
        super();
    }

    async getCategories(req, res, next) {
        this.initialize(req, res, next);
        this.categoryFactory = new CategoryFactory();
        const categories = await this.categoryFactory.getCategories(req.query);
        this.sendAPI(categories);
    }

    async createCategory(req, res, next) {
        this.initialize(req, res, next);
        this.categoryFactory = new CategoryFactory();
        const ret = await this.categoryFactory.createCategory(req.body);
        this.sendAPI(ret);
    }

    async updateCategory(req, res, next) {
        this.initialize(req, res, next);
        this.categoryFactory = new CategoryFactory();
        const category = await this.categoryFactory.updateCategory(req.body);
        this.sendAPI(category);
    }

    async deleteCategory(req, res, next) {
        this.initialize(req, res, next);
        this.categoryFactory = new CategoryFactory();
        const category = await this.categoryFactory.deleteCategory(req.body);
        this.sendAPI(category);
    }
}

module.exports = apiCategoryController;
