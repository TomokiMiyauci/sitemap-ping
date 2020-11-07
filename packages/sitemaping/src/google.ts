import got from 'got'

import { BASE_URL_GOOGLE } from './constant'
import SearchEngine from './search-engine'

const http = got.extend({
  prefixUrl: BASE_URL_GOOGLE,
})

export class Google extends SearchEngine {
  constructor(sitemapUrl?: string) {
    super(sitemapUrl)
  }

  ping = async (sitemapUrl?: string): Promise<number | never> => {
    if (!this.check(sitemapUrl)) {
      throw SyntaxError()
    }

    const result = await http.get('', {
      searchParams: {
        sitemap: this.url,
      },
    })

    return result.statusCode
  }
}
