const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'Suvi',
  password: 'Marika87',
  database: 'test_db'
});
module.exports = connection;