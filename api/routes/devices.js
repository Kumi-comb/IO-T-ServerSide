import * as express from 'express'
import { check, validationResult } from 'express-validator/check'

const router = express.Router()

/* 関連ライブラリ インポート */
import queues from './../libs/queues'

/**
 * デバイスキューを追加する
 */
router.put(
  '/:deviceId/queue',
  [
    /* キュータイプ(req.body.type) */
    check('type')
      .isString()
      .not()
      .isEmpty(),

    /* リクエスト状態(req.body.value) */
    check('value')
      .isString()
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    /* バリデーション */
    const validationErrors = validationResult(req)
    if (validationErrors.array().length !== 0) {
      return res
        .status(422)
        .json({ status: false, errors: validationErrors.array() })
    }

    const body = req.body
    const queueId = await queues
      .add(req.params.deviceId, body.type, body.value)
      .catch(err => res.status(500).json({ errors: err }))
    return res.json({
      id: queueId,
      type: body.type,
      value: body.value,
      status: 'PENDING',
      user: { id: '11451491910' },
      timestamp: '1145141919810'
    })
  }
)

/**
 * デバイスの最新キューを取得する
 */
router.get('/:deviceId/queue', async (req, res) => {
  const queue = await queues.getLatest(req.params.deviceId)

  return res.json({
    id: queue.queueId,
    deviceId: queue.deviceId,
    type: queue.type,
    value: queue.value,
    status: queue.status,
    user: { id: queue.userId },
    timestamp: queue.timestamp
  })
})

export default router
