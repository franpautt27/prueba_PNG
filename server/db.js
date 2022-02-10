const {Pool} = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "fran123456",
    host: "localhost",
    port: 5432,
    database: 'moviesdb'
})

module.exports = pool;