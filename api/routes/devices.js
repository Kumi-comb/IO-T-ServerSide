import * as express from 'express'
import { check, validationResult } from 'express-validator/check'

const router = express.Router()

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
  (req, res) => {
    /* バリデーション */
    const validationErrors = validationResult(req)
    if (validationErrors.array().length !== 0) {
      return res
        .status(422)
        .json({ status: false, errors: validationErrors.array() })
    }

    return res.json({
      id: req.params.deviceId,
      type: 'TOGGLE',
      value: 'ON',
      status: 'PENDING',
      user: { id: '11451491910' },
      timestamp: '1145141919810'
    })
  }
)

/**
 * デバイスの最新キューを取得する
 */
router.get('/:deviceId/queue', (req, res) => {
  return res.json({
    id: req.params.deviceId,
    type: 'TOGGLE',
    value: 'ON',
    status: 'PENDING',
    user: { id: '11451491910' },
    timestamp: '1145141919810'
  })
})

export default router
