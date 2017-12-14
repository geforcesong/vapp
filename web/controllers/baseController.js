const APIManager = require('../../utils/apiManager');

class BaseController {
    initialize(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    redirect301(url) {
        if (!this.res.headersSent) {
            this.res.writeHead(301, {
                Location: url
            });
            this.res.end();
        }
    }

    redirect302(url) {
        if (!this.res.headersSent) {
            this.res.writeHead(302, {
                Location: url
            });
            this.res.end();
        }
    }

    renderPage(url, model) {
        if (this.res.headersSent) {
            return;
        }
        this.res.render(url, model, (err, html) => {
            if (err) {
                console.log(err);
                return this.res.sendStatus(500);
            }
            return this.res.send(html);
        });
    }

    sendJson(model) {
        return this.res.json(model);
    }

    sendAPI(data) {
        const ret = APIManager.getResponse(data);
        this.sendJson(ret);
    }
}

module.exports = BaseController;
