const logger = require('../logging/logger');
const util = require('util');
module.exports = function(app) {
    app.use(function(err, req, res, next) {
        if (err) {
            const msg = util.inspect(err) + '\n' + err.stack + '\n' + err.position;
            logger.error(msg);
            return res.status(500).send(msg);
        }
    });
};
