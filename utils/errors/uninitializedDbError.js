const ExtendableError = require('./extendableError');

class UninitializedDbError extends ExtendableError {
    constructor(message) {
        super(message);
    }
}

module.exports = UninitializedDbError;
