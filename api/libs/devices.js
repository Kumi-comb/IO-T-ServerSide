require('date-utils')
import db from './db'

const get = userId =>
  new Promise(async (resolve, reject) => {
    const devicesList = await loadDevicesFromUserId(userId)
    const result = devicesList.map(x => ({
      id: x.deviceId,
      type: x.type,
      name: x.name,
      user: { id: x.userId }
    }))

    return resolve(result)
  })

const loadDevicesFromUserId = userId =>
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

      const timestamp = Math.floor(new Date().getTime() / 1000)

      con.query(
        {
          sql: 'INSERT INTO statuses SET ?',
          values: {
            deviceId,
            type,
            status: JSON.stringify(status),
            timestamp
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

const getLatestStatus = deviceId =>
  new Promise(async (resolve, reject) => {
    const latestStatus = await loadLatestStatusFromDeviceId(deviceId)
    const status = JSON.parse(latestStatus.status)
    status.timestamp = latestStatus.timestamp

    return resolve(status)
  })

const loadLatestStatusFromDeviceId = deviceId =>
  new Promise((resolve, reject) => {
    db.getConnection((err, con) => {
      if (err) return reject(err)

      con.query(
        {
          sql:
            'SELECT * FROM statuses WHERE deviceId = ? ORDER BY statusId DESC LIMIT 1',
          values: [deviceId]
        },
        (err, res) => {
          con.release()
          if (err) return reject(err)

          return resolve(res[0])
        }
      )
    })
  })

export default {
  get,
  addStatus,
  getLatestStatus
}
