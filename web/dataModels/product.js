const BaseData = require('./baseData');
class Product extends BaseData {
    constructor(raw) {
        super(raw);
        this.name = raw.name;
        this.isActive = raw.isActive;
        this.contentHTML = raw.contentHTML;
        this.createdTime = raw.createdTime;
    }
}

module.exports = Product;
