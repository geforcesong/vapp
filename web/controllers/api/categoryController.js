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
        try {
            const ret = await this.categoryFactory.createCategory(req.body);
            this.sendAPI(ret);
        } catch (err) {
            this.sendAPI(null, err);
        }
    }

    async updateCategory(req, res, next) {
        this.initialize(req, res, next);
        this.categoryFactory = new CategoryFactory();
        try {
            const category = await this.categoryFactory.updateCategory(req.body);
            this.sendAPI(category);
        } catch (err) {
            this.sendAPI(null, err);
        }

    }

    async deleteCategory(req, res, next) {
        this.initialize(req, res, next);
        this.categoryFactory = new CategoryFactory();
        try {
            const category = await this.categoryFactory.deleteCategory(req.body);
            this.sendAPI(category);
        } catch (err) {
            this.sendAPI(null, err);
        }
    }
}

module.exports = apiCategoryController;
