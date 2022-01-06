const mysql = require("mysql2");
const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "cdacmumbaipgdacsep2021",
};

const addUser = (user) => {
  const connection = mysql.createConnection(dbinfo);

  connection.connect();

  // ANYONE CAN HACK THIS. ::  SQL INJECTION
  // let sql = `INSERT INTO user (username, password) values ("${user.username}", "${user.password}")`;
  let sql = `INSERT INTO UI (username, pass) values (?, ?)`;
  connection.query(sql, [user.username, user.password]); // MASKING THE QUERY PARAMES

  console.log("USER ADDED");

  connection.end();
};

const user = { username: "CDAC", password: "cdac@123" };
addUser(user);