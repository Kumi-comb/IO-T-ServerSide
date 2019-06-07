import mysql from 'mysql'
import mysqlConfig from './../../mysql.config'

export default mysql.createPool(mysqlConfig)
