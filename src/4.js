const mysql = require("mysql2");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "cdacmumbaipgdacsep2021"
};

const addUser = (user) => {
  const connection = mysql.createConnection(dbinfo);
  connection.connect();

  let sql = `INSERT INTO UI (username, pass) values ("${user.username}", "${user.password}")`;
  connection.query(sql);

  connection.end();
};

// CALLING THE METHOD
const user = { username: "amol", password: "amol@132node" };
addUser(user);