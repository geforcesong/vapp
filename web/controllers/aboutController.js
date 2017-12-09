const BaseController = require('./baseController');
const AboutModel = require('../models/about/AboutModel');

class HomeController extends BaseController {
    constructor() {
        super();
    }

    loadView(req, res, next) {
        this.initialize(req, res, next);
        const aboutModel = new AboutModel();
        this.renderPage('about/about.pug', aboutModel);
    }
}

module.exports = HomeController;
