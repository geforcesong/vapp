const BaseModel = require('../base/BaseModel');

class AboutModel extends BaseModel {
    constructor() {
        super('AboutPage');
        this.pageTitle = 'About Page';
    }
}

module.exports = AboutModel;
