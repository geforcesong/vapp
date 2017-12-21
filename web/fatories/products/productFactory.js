const { COLLECTIONNAMES } = require('../../../utils/constants');
const mongoContext = require('../../../server/databases/mongodb/mongoContext');
const Product = require('../../dataModels/product');
const MongoOperationError = require('../../../utils/errors/mongoOperationError');
const InvalidParamsError = require('../../../utils/errors/invalidParamsError');

class ProductFactory {
    constructor() {
        this.collection = mongoContext.collection(COLLECTIONNAMES.Products);
    }

    async getProducts(query) {
        const products = await this.collection.find().project({
            _id: true,
            createdTime: true,
            name: true,
            isActive: true,
            categories: true
        }).toArray();
        return products;
    }

    async getProductById(id) {
        const products = await this.collection.find({ _id: id }).toArray();
        if (products && products.length) {
            return products[0];
        }
        return null;
    }

    async createProduct(body) {
        if (!body) {
            throw new InvalidParamsError('Product object can not be empty when creating.');
        }
        body.createdTime = new Date();
        const product = new Product(body);
        const ret = await this.collection.insert(product);
        if (ret.result && ret.result.ok === 1 && ret.result.n === 1) {
            product._id = ret.insertedIds[0];
            return product;
        }
        throw new MongoOperationError('Create product failed!');
    }

    async updateProduct(body) {
        const product = new Product(body);
        await this.collection.updateOne(
            {
                _id: mongoContext.toObjectId(product._id)
            },
            {
                $set: {
                    name: product.name,
                    categories: product.categories,
                    isActive: product.isActive,
                    contentHTML: product.contentHTML,
                    updatedTime: new Date()
                }
            }
        );
        return product;
    }

    async deleteCategory(body) {
        const product = new Product(body);
        await this.collection.remove({ _id: mongoContext.toObjectId(product._id) });
        return product;
    }
}

module.exports = ProductFactory;
