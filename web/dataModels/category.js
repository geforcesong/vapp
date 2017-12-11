const BaseData = require('./baseData');
class Category extends BaseData {
    constructor(raw) {
        super(raw);
        this.name = raw.name;
        this.parentId = raw.parentId;
        this.isActive = raw.isActive;
        this.sortOrder = raw.sortOrder;
    }
}

module.exports = Category;
