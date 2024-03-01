const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'Suvi',
  password: 'Marika87',
  database: 'arviointitietokanta'
});
module.exports = connection;