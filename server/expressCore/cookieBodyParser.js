var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
module.exports = function (app) {
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
    app.use(bodyParser.urlencoded({ extended: false }));
}