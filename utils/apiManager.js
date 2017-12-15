const logger = require('../server/logging/logger');
class APIResponse {
    constructor(status, result, error) {
        this.result = result;
        this.status = status;
        this.error = error;
    }
}


class APIManager {
    static getResponse(data) {
        return new APIResponse(0, data, null);
    }

    static getError(err) {
        let message = err.toString();
        logger.error(message);
        if (err.message) {
            message = err.message;
        }
        return new APIResponse(-1, null, message);
    }
}

module.exports = APIManager;
