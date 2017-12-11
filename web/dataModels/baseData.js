const InvalidParamsError = require('../../utils/errors/invalidParamsError');

class BaseData {
    constructor(raw) {
        if (!raw) {
            throw new InvalidParamsError('Parameter for BaseData is mandatory');
        }
        this._id = raw._id;
        this.createdTime = raw.createdTime;
        this.updatedTime = raw.updatedTime;
    }
}

module.exports = BaseData;
