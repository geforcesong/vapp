const ProductController = require('../../../web/controllers/api/productController.js');
const BaseRouteManager = require('../BaseRouteManager');

class ProductRouteManager extends BaseRouteManager {
    constructor(app) {
        super(app);
    }

    register() {
        this._registerOne('get', '/api/products', new ProductController(), 'getProducts');
        this._registerOne('get', '/api/products/:id', new ProductController(), 'getProductById');
        this._registerOne('post', '/api/products', new ProductController(), 'createProduct');
        this._registerOne('put', '/api/products/:id', new ProductController(), 'updateProduct');
        this._registerOne('delete', '/api/products/:id', new ProductController(), 'deleteProduct');
    }
}

module.exports = ProductRouteManager;
