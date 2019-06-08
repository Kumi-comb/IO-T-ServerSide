import mysql from 'mysql'
require('dotenv').config()

export default mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB
})
