const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const RouteManager = require('./server/routes/RouteManager');
const mongoContext = require('./server/databases/mongodb/mongoContext.js');

class Server {
    constructor() {
        this.app = express();
        this.app.set('views', path.join(__dirname, 'web', 'views'));
        this.app.set('view engine', 'pug');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
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

var server = new Server();
server.run();
