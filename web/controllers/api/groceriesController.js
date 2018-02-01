const BaseController = require('../baseController');
class apiGroceriesController extends BaseController {
    constructor() {
        super();
    }

    async saveUploadedImageForTextboxIO(req, res, next) {
        this.initialize(req, res, next);
        return res.send('hello');
    }
}

module.exports = apiGroceriesController;
