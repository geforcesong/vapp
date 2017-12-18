//const MongoOperationError = require('./utils/errors/mongoOperationError');
//const ExtendableError = require('./utils/errors/extendableError');
// try {
//     throw new MongoOperationError('sdfs');
// } catch (err) {
//     console.log(err instanceof ExtendableError);
// }

const MongoOperationError = require('./utils/errors/mongoOperationError');
const ExtendableError = require('./utils/errors/extendableError.js');

try {
    throw new MongoOperationError('sdfs');
} catch (err) {
    console.log(err instanceof ExtendableError);
}
