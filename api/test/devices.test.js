import queues from './../libs/queues'
import devices from './../libs/devices'

describe('Add Queue Sequence', () => {
  test('Add Queue', async () => {
    expect(await queues.add('TEST', 'TEST', 'HELLO')).toBeGreaterThan(0)
  })

  test('Read Queue', async () => {
    const latestStatus = await queues.getLatest('TEST')
    expect(latestStatus.value).toBe('HELLO')
  })

  test('Fetch Device Status', async () => {
    expect(await devices.addStatus('TEST', 'TEST', { test: 'HELLO' })).toBe(
      true
    )
  })

  test('Read Device Status', async () => {
    const deviceStatus = await devices.getLatestStatus('TEST')
    expect(deviceStatus.test).toBe('HELLO')
  })
})
