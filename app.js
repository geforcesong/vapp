const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const RouteManager = require('./server/routes/RouteManager');
const mongoContext = require('./server/databases/mongodb/mongoContext.js');
const logger = require('./server/logging/logger');
const accessLog = require('./server/expressCore/accessLog');
const util = require('util');

class Server {
    constructor() {
        this.app = express();
        this.app.set('views', path.join(__dirname, 'web', 'views'));
        this.app.set('view engine', 'pug');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        accessLog(this.app);
        this.app.use(express.static(path.join(__dirname, 'public')));
        const routeManager = new RouteManager(this.app);
        routeManager.register();
    }
    async run() {
        await mongoContext.connect();

        this.app.listen(3000, function () {
            console.log('Typtscript Example app listening on port 3000!');
        });
    }
}

process.on('unhandledRejection', function(reason, p) {
    if (reason) {
        logger.error(util.inspect(reason) + '\n' + reason.stack);
    }
});

process.on('error', function(err) {
    err.type = 'UnCaughtError';
    var msg = err.stack ? util.format('[%s]: %s', err.type, err.stack) : util.format('[%s]: %s', err.type, err);
    logger.error(msg);
});

var server = new Server();
server.run();
