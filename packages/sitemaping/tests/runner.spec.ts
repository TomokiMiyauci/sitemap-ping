import { requestUpdate } from '../src/runner'

describe('requestUpdate', () => {
  it('should return success', async () => {
    const expected = await requestUpdate('https://test.com', ['google'])

    expect(expected).toEqual([{ status: 200, name: 'google' }])
  })
})
