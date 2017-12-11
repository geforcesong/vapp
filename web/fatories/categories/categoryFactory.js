const {COLLECTIONNAMES} = require('../../../utils/constants');
const mongoContext = require('../../../server/databases/mongodb/mongoContext');
const Category = require('../../dataModels/category');

class CategoryFactory {
    constructor() {
        this.collection = mongoContext.collection(COLLECTIONNAMES.Categories);
    }

    async getCategories(query) {
        const categories = await this.collection.find().toArray();
        return categories;
    }

    async createCategory(body) {
        const category = await this.collection.insert({
            name: body.name,
            parentId: body.parentId,
            isActive: true,
            sortOrder: body.sortOrder,
            createdTime: new Date()
        });
        return category;
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
        await this.collection.remove({_id: this.collection.toID(category._id)});
        return category;
    }
}

module.exports = CategoryFactory;
