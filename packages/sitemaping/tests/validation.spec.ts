import { urlRegex } from '../src/validation'

describe('urlRegex', () => {
  const table: [string, boolean][] = [
    // NG pattern
    ['http', false],
    ['https', false],
    ['https:/', false],
    ['https://', false],
    ['https:///', false],
    ['https://test.', false],
    ['test.com', false],
    ['https://test', false],

    // OK pattern
    ['https://test.com', true],
    ['https://test.com/.', true],
    ['https://test.com/', true],
    ['https://test.com/sitemap', true],
    ['https://test.com/index.html', true],
    ['https://test.com/sitemap.xml', true],
  ]
  it.each(table)('%s %s', (url, expected) => {
    if (expected) {
      expect(urlRegex.test(url)).toBeTruthy()
    } else {
      expect(urlRegex.test(url)).toBeFalsy()
    }
  })
})
