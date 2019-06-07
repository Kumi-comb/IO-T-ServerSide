import * as express from 'express'
import { check, validationResult } from 'express-validator/check'

const router = express.Router()

/**
 * キュー状態を更新する
 */
router.patch('/:queueId/status', (req, res) => {
  return res.json({
    id: req.params.deviceId,
    type: 'TOGGLE',
    value: 'ON',
    status: 'SUCCESSED',
    user: { id: '11451491910' },
    timestamp: '1145141919810'
  })
})

export default router
