// import { MissingParameterError } from '../src/error'
import { Google } from '../src/google'

describe('Google', () => {
  // describe('check', () => {
  //   it('should throw error when it do not give arg', () => {
  //     const google = new Google()

  //     expect(google.check()).rejects.toThrowError(SyntaxError())
  //   })
  // })
  it('should return 200 when it gives right url', async () => {
    const google = new Google('https://thisistest.xml')
    const expected = await google.ping()

    expect(expected).toBe(200)
  })

  it('should throw error when it gives wrong url', async () => {
    const google = new Google('https://thisistest')

    expect(google.ping).rejects.toThrowError(SyntaxError())
  })

  it('should throw error when it gives wrong url2', async () => {
    const google = new Google('thisistest')

    expect(google.ping).rejects.toThrowError(SyntaxError())
  })

  it('should throw error when it gives wrong url3', async () => {
    const google = new Google('https://thisistest.')

    expect(google.ping).rejects.toThrowError(SyntaxError())
  })

  it('should throw error when it gives wrong url4', async () => {
    const google = new Google('https://thisistest.com/f')
    const expected = await google.ping()

    expect(expected).toBe(200)
  })
})
