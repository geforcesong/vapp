const BaseController = require('./baseController');
const AdminModel = require('../models/admin/AdminModel');

class AdminController extends BaseController {
    constructor() {
        super();
    }

    loadView(req, res, next) {
        this.initialize(req, res, next);
        const adminModel = new AdminModel();
        this.renderPage('admin/admin.pug', adminModel);
    }
}

module.exports = AdminController;
