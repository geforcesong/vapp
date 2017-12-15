const morgan = require('morgan');
const logger = require('../logging/logger');

module.exports = function (app) {
    const winstonAccessStream = {
        write: function (message, encoding) {
            logger.accessInfo(message);
        }
    };
    app.use(morgan(':remote-addr - - [:date] :method :url HTTP/:http-version :status :res[content-length] :response-time ms :referrer :user-agent', {
        stream: winstonAccessStream
    }));
}