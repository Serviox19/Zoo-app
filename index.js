var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dopekidx19',
  database: 'zoo_db'
});

connection.connect();