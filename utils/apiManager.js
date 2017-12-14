class APIManager {
    static getResponse(data) {
        return {
            result: data,
            status: 0
        };
    }

    static getError(err) {
        return {
            result: err,
            status: -1
        };
    }
}

module.exports = APIManager;
