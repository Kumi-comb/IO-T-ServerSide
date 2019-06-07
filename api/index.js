import express from 'express'
const app = express()

import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

import devicesRoute from './routes/devices'
import queuesRoute from './routes/queues'

app.use('/devices', devicesRoute)
app.use('/queues', queuesRoute)

app.get('/', (req, res) => {
  return res.json({ message: 'hello world!' })
})

module.exports = {
  path: '/api',
  handler: app
}
