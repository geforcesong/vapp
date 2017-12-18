const ExtendableError = require('./extendableError');

class MongoOperationError extends ExtendableError {
    constructor(message) {
        super(message);
    }
}

module.exports = MongoOperationError;
