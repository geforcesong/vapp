const ExtendableError = require('./ExtendableError');

class MongoOperationError extends ExtendableError {
    constructor(message) {
        super(message);
    }
}

module.exports = MongoOperationError;
