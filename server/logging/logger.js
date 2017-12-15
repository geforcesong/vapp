const config = require('../configuration/system.config.json');
const fs = require('fs');
var mkdirp = require('mkdirp');
const winston = require('winston');
require('winston-daily-rotate-file');
class Logger {
    constructor() {
        this.isProduction = process.env.NODE_ENV === 'production';
        if (!fs.existsSync(config.logging.logPath)) {
            mkdirp.sync(config.logging.logPath);
        }
        this.errorLog = this.createLogger('error', true);
        this.accessLog = this.createLogger('access', false);
    }

    createLogger(fileName, needConsole) {
        let transport = new (winston.transports.DailyRotateFile)({
            filename: `${config.logging.logPath}/${fileName}`,
            datePattern: '-yyyy-MM-dd.log'
        });

        let transports = [];
        if (needConsole) {
            transports.push(new (winston.transports.Console)());
        }
        transports.push(transport);

        let _logger = new (winston.Logger)({
            transports: transports
        });
        return _logger;
    }

    accessInfo(message) {
        this.accessLog.info(message);
    }

    error(message) {
        this.errorLog.error(message);
    }
}

module.exports = new Logger();