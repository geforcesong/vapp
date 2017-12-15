const logger = require('../logging/logger');
const util = require('util');

module.exports = function () {
    process.on('unhandledRejection', function (reason, p) {
        if (reason) {
            logger.error(util.inspect(reason) + '\n' + reason.stack);
        }
    });

    process.on('error', function (err) {
        err.type = 'UnCaughtError';
        var msg = err.stack ? util.format('[%s]: %s', err.type, err.stack) : util.format('[%s]: %s', err.type, err);
        logger.error(msg);
    });
}