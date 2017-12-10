const BaseModel = require('../base/BaseModel');

class AdminModel extends BaseModel {
    constructor() {
        super('AdminPage');
        this.pageTitle = 'Admin Page';
    }
}

module.exports = AdminModel;
