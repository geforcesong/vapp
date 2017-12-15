const { COLLECTIONNAMES } = require('../../../utils/constants');
const mongoContext = require('../../../server/databases/mongodb/mongoContext');
const Category = require('../../dataModels/category');
const MongoOperationError = require('../../../utils/errors/mongoOperationError');
const InvalidParamsError = require('../../../utils/errors/invalidParamsError');

class CategoryFactory {
    constructor() {
        this.collection = mongoContext.collection(COLLECTIONNAMES.Categories);
    }

    async getCategories(query) {
        const categories = await this.collection.find().toArray();
        return categories;
    }

    async createCategory(body) {
        if (!body) {
            throw new InvalidParamsError('Category object can not be empty when creating.');
        }
        body.createdTime = new Date();
        const category = new Category(body);
        const ret = await this.collection.insert(category);
        if (ret.result && ret.result.ok === 1 && ret.result.n === 1) {
            category._id = ret.insertedIds[0];
            return category;
        }
        throw new MongoOperationError('Create category failed!');
    }

    async updateCategory(body) {
        const category = new Category(body);
        await this.collection.updateOne(
            {
                _id: this.collection.toID(category._id)
            },
            {
                name: category.name,
                parentId: category.parentId,
                isActive: category.isActive,
                sortOrder: category.sortOrder,
                updatedTime: new Date()
            }
        );
        return category;
    }

    async deleteCategory(body) {
        const category = new Category(body);
        await this.collection.remove({ _id: this.collection.toID(category._id) });
        return category;
    }
}

module.exports = CategoryFactory;
