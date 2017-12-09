const BaseModel = require('../base/BaseModel');

class HomeModel extends BaseModel {
    constructor() {
        super('HomePage');
        this.pageTitle = 'Home Page';
    }
}

module.exports = HomeModel;
