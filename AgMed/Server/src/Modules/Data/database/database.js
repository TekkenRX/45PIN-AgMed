const pgp = require("pg-promise")();
const db = pgp({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: "5432",
  database: "45-PIN",
});


module.exports = db;