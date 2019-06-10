import db from './db'

const get = userId =>
  new Promise(async (resolve, reject) => {
    const devicesList = await getDevicesFromUserId(userId)
    const result = devicesList.map(x => ({
      id: x.deviceId,
      type: x.type,
      name: x.name,
      user: { id: x.userId }
    }))

    return resolve(result)
  })

const getDevicesFromUserId = userId =>
  new Promise((resolve, reject) => {
    db.getConnection((err, con) => {
      if (err) return reject(err)

      con.query({ sql: 'SELECT * FROM devices WHERE 1' }, (err, res) => {
        con.release()
        if (err) return reject(err)

        return resolve(res)
      })
    })
  })

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
  get,
  addStatus
}
