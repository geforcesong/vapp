const express = require('express');
const path = require('path');
const RouteManager = require('./server/routes/RouteManager');
const mongoContext = require('./server/databases/mongodb/mongoContext.js');
const accessLog = require('./server/expressCore/accessLog');
const processError = require('./server/expressCore/processError');
const expressError = require('./server/expressCore/expressError');
const cookieBodyParser = require('./server/expressCore/cookieBodyParser');
class Server {
    constructor() {
        this.app = express();
        this.app.set('views', path.join(__dirname, 'web', 'views'));
        this.app.set('view engine', 'pug');
        cookieBodyParser(this.app);
        accessLog(this.app);
        this.app.use(express.static(path.join(__dirname, 'public')));
        const routeManager = new RouteManager(this.app);
        routeManager.register();
        expressError(this.app);
    }
    async run() {
        // await mongoContext.connect();

        this.app.listen(3000, function () {
            console.log('Typtscript Example app listening on port 3000!');
        });
    }
}

processError();

var server = new Server();
server.run();
