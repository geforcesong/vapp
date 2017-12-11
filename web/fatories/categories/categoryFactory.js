const {COLLECTIONNAMES} = require('../../../utils/constants');
const mongoContext = require('../../../server/databases/mongodb/mongoContext');

class CategoryFactory {
    async getCategories() {
        const categories = await mongoContext.collection(COLLECTIONNAMES.Categories).find().toArray();
        return categories;
    }
}

module.exports = CategoryFactory;
