import db from './db'

/**
 * キューを追加する
 * @param {string} deviceId デバイスId
 * @param {string} type キュー種類
 * @param {string} value リクエスト内容
 */
const add = (deviceId, type, value) =>
  new Promise((resolve, reject) => {
    db.getConnection((err, con) => {
      if (err) return reject(err)

      con.query(
        {
          sql: 'INSERT INTO queues SET ?',
          values: { deviceId, type, value, status: 'PENDING', userId: '1' }
        },
        (err, res) => {
          con.release()
          db.escape()

          if (err) return reject(err)

          return resolve(res.insertId)
        }
      )
    })
  })

/**
 * 最新キューを取得する
 * @param {string} deviceId デバイスId
 */
const getLatest = deviceId =>
  new Promise((resolve, reject) => {
    db.getConnection((err, con) => {
      if (err) return reject(err)

      con.query(
        {
          sql:
            'SELECT * FROM queues WHERE deviceId = ? ORDER BY queueId DESC LIMIT 1',
          values: [deviceId]
        },
        (err, res) => {
          con.release()
          db.escape()

          if (err) return reject(err)

          return resolve(res[0])
        }
      )
    })
  })

/**
 * キュー状態を変更する
 * @param {string} queueId キューId
 * @param {string} status キュー状態
 */
const updateStatus = (queueId, status) =>
  new Promise((resolve, reject) => {
    db.getConnection((err, con) => {
      if (err) return reject(err)

      con.query(
        {
          sql: 'UPDATE queues SET status = ? WHERE queueId = ?',
          values: [status, queueId]
        },
        (err, res) => {
          con.release()
          db.escape()

          if (err) return reject(err)

          return resolve(true)
        }
      )
    })
  })

export default {
  add,
  getLatest,
  updateStatus
}
