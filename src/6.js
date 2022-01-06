const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "cdacmumbaipgdacsep2021",
};

const checkConnection = async () => {
  const connection = mysql.createConnection(dbinfo);

  // ASYNC
  await connection.connectAsync();

  // ...
  console.log("CONNECTION SUCCESS");

  // ASYNC
  await connection.endAsync();
};

checkConnection();