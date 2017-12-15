class APIManager {
    static getResponse(data) {
        return {
            result: data,
            status: 0
        };
    }

    static getError(err) {
        return {
            Error: err.toString(),
            status: -1
        };
    }
}

module.exports = APIManager;
