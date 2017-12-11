const mongoClient = require('mongodb').MongoClient;
const config = require('../../configuration/system.config.json');
const UninitializedDbError = require('../../../utils/errors/UninitializedDbError');

class MongoContext {
    constructor() {
        this.db = null;
    }

    connect() {
        if (this.db) {
            return Promise.reslove(this.db);
        }

        return new Promise((resolve, reject) => {
            mongoClient.connect(config.database.mongoConnectionString, (err, db) => {
                if (err) {
                    return reject(err);
                }
                this.db = db;
                resolve(db);
            });
        });
    }

    collection(name) {
        if (!this.db) {
            throw new UninitializedDbError('[ERROR - DB] DB is not initialized..');
        }
        return this.db.collection(name);
    }

    close(done) {
        if (!this.db) {
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            this.db.close((err, result) => {
                if (err) {
                    return reject(err);
                }
                this.db = null;
                resolve();
            });
        });
    }
}

module.exports = new MongoContext();
