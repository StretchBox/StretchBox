const { Pool } = require('pg');

const PG_URI = 'postgres://drivmmdq:dOrUoYjYc18tWPvker0q2wcNbB6BRuGm@jelani.db.elephantsql.com/drivmmdq';

const pool = new Pool({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('query executed', text);
        return pool.query(text, params, callback);
    }
}