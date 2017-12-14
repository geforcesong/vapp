class APIManager {
    static getResponse(data) {
        return {
            result: data,
            status: 0
        };
    }
}

module.exports = APIManager;
