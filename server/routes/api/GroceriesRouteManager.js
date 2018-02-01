const GroceriesController = require('../../../web/controllers/api/groceriesController.js');
const BaseRouteManager = require('../BaseRouteManager');

class GroceriesRouteManager extends BaseRouteManager {
    constructor(app) {
        super(app);
    }

    register() {
        this._registerOne('post', '/api/textio/uploadimage', new GroceriesController(), 'saveUploadedImageForTextboxIO');
    }
}

module.exports = GroceriesRouteManager;
