const BaseController = require('./baseController');
const HomeModel = require('../models/home/HomeModel');

class HomeController extends BaseController {
    constructor() {
        super();
    }

    loadView(req, res, next) {
        throw new Error('heeeee....')
        this.initialize(req, res, next);
        const homeModel = new HomeModel();
        this.renderPage('home/home.pug', homeModel);
    }
}

module.exports = HomeController;
