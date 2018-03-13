module.exports = { mongo: { url: process.env.MONGO_URL || `mongodb://${process.env.MONGO_USER || 'node'}:${process.env.MONGO_PWD || 'node'}@127.0.0.1/movies` } };
