let mysql = require("mysql");

let connection = mysql.createConnection({
  /*
  host: "localhost",
  */
  host: "https://tkjbapinodejs.herokuapp.com/",
  user: "hannan",
  password: "123",
  database: "buku",
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connection Succuessfully!");
  }
});

module.exports = connection;
