const mysql = require('mysql');
const con = mysql.createConnection({
    host: "mysql.ct8.pl",
    user: "m7807_uriash",
    password: "Shinseikai2002",
    database: "m7807_mysql"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });