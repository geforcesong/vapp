const BaseController = require('../baseController');
const CategoryFactory = require('../../fatories/categories/categoryFactory');
class apiCategoryController extends BaseController {
    constructor() {
        super();
        this.categoryFactory = new CategoryFactory();
    }

    async getCategories(req, res, next) {
        this.initialize(req, res, next);
        
        const categories = await this.categoryFactory.getCategories(req.query);
        this.sendJson(categories);
    }

    async createCategory(req, res, next) {
        this.initialize(req, res, next);
        const category = await this.categoryFactory.createCategory(req.body);
        this.sendJson(category);
    }

    async updateCategory(req, res, next) {
        this.initialize(req, res, next);
        const category = await this.categoryFactory.updateCategory(req.body);
        this.sendJson(category);
    }

    async deleteCategory(req, res, next) {
        this.initialize(req, res, next);
        const category = await this.categoryFactory.deleteCategory(req.body);
        this.sendJson(category);
    }
}

module.exports = apiCategoryController;
