const ExtendableError = require('./extendableError');

class InvalidParamsError extends ExtendableError {
    constructor(message) {
        super(message);
    }
}

module.exports = InvalidParamsError;
