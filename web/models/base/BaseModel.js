const setting = require('../../../server/configuration/system.config.json');
const pkg = require('../../../package.json');

class BaseModel {
    constructor(pageType) {
        this.pageType = pageType;
        this.server = setting.server;
        this.server.cdnUrl = process.env.NODE_ENV === 'DEV' ? this.server.devServerUrl : this.server.appUrl;
        this.version = pkg.version;
    }
}

module.exports = BaseModel;
