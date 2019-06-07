import * as express from 'express'
import { check, validationResult } from 'express-validator/check'

const router = express.Router()

/* 関連ライブラリ インポート */
import queues from './../libs/queues'

/**
 * キュー状態を更新する
 */
router.patch(
  '/:queueId/status',
  [
    /* キュー状態(req.body.status) */
    check('status')
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

    const updateStatus = await queues.updateStatus(
      req.params.queueId,
      req.body.status
    )
    return res.json({ status: updateStatus })

    // return res.json({
    //   id: req.params.queueId,
    //   type: 'TOGGLE',
    //   value: 'ON',
    //   status: 'SUCCESSED',
    //   user: { id: '11451491910' },
    //   timestamp: '1145141919810'
    // })
  }
)

export default router
