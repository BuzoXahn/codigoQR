const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password:"chan",
    host:"localhost",
    port:"5432",
    database:"central_perruna",
});

module.exports = pool;