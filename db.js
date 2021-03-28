const db = require('mongoose');

db.Promise = global.Promise;

// 'mongodb://user:user@host.com:55107/nodechat'
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
    });
    console.log('[db] connection successful');
}

module.exports = connect;
