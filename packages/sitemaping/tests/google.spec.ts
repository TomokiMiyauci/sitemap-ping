import { Google } from '../src/google'

describe('Google', () => {
  it('should return 200 when it gives right url', async () => {
    const google = new Google('https://thisistest.xml')
    const expected = await google.ping()

    expect(expected).toBe(200)
  })
})
