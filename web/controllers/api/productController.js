const BaseController = require('../baseController');
const ProductFactory = require('../../fatories/products/productFactory');
class apiProductController extends BaseController {
    constructor() {
        super();
    }

    async getProducts(req, res, next) {
        this.initialize(req, res, next);
        const productFactory = new ProductFactory();
        const products = await productFactory.getProducts(req.query);
        this.sendAPI(products);
    }

    async createProduct(req, res, next) {
        this.initialize(req, res, next);
        const productFactory = new ProductFactory();
        try {
            const ret = await productFactory.createProduct(req.body);
            this.sendAPI(ret);
        } catch (err) {
            this.sendAPI(null, err);
        }
    }

    async updateProduct(req, res, next) {
        this.initialize(req, res, next);
        const productFactory = new ProductFactory();
        try {
            const product = await productFactory.updateProduct(req.body);
            this.sendAPI(product);
        } catch (err) {
            this.sendAPI(null, err);
        }
    }

    async deleteProduct(req, res, next) {
        this.initialize(req, res, next);
        const productFactory = new ProductFactory();
        try {
            const product = await productFactory.deleteProduct(req.body);
            this.sendAPI(product);
        } catch (err) {
            this.sendAPI(null, err);
        }
    }
}

module.exports = apiProductController;
