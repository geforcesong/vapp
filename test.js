const MongoOperationError = require('./utils/errors/mongoOperationError');
const ExtendableError = require('./utils/errors/ExtendableError');

// var c = new MongoOperationError('hahah');
try {
    throw new MongoOperationError('sdfs');
} catch (err) {
    console.log(err instanceof ExtendableError);
}
