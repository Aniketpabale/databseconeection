const mysql = require("mysql2");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "cdacmumbaipgdacsep2021"
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

// QUERY
let sql = `INSERT INTO UI (username, pass) values ("rahul", "rohitkapadfasfsa")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();