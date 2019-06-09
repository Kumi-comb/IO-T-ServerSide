import db from './db'

/**
 * デバイス状態を追加する
 * @param {string} deviceId
 * @param {string} type
 * @param {string} status
 */
const addStatus = (deviceId, type, status) =>
  new Promise((resolve, reject) => {
    db.getConnection((err, con) => {
      if (err) return reject(err)

      con.query(
        {
          sql: 'INSERT INTO statuses SET ?',
          values: {
            deviceId,
            type,
            status: JSON.stringify(status),
            timestamp: 114514
          }
        },
        err => {
          con.release()
          if (err) return reject(err)

          return resolve(true)
        }
      )
    })
  })

export default {
  addStatus
}
