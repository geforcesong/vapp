const express = require('express');
const path = require('path');
const RouteManager = require('./server/routes/RouteManager');

class Server {
    constructor() {
        this.app = express();
        this.app.set('views', path.join(__dirname, 'web', 'views'));
        this.app.set('view engine', 'pug');
        this.app.use(express.static(path.join(__dirname, 'public')));
        RouteManager.register(this.app);
    }
    run() {
        this.app.listen(3000, function () {
            console.log('Typtscript Example app listening on port 3000!');
        });
    }
}

var server = new Server();
server.run();
