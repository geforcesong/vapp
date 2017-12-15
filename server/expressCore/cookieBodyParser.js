var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
module.exports = function (app) {
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}