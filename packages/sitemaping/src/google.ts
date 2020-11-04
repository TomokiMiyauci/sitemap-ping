import got from 'got'

import { BASE_URL_GOOGLE } from './constant'
import SearchEngine from './search-engine'

const http = got.extend({
  prefixUrl: BASE_URL_GOOGLE,
})

export class Google extends SearchEngine {
  private sitemapUrl: string
  constructor(sitemapUrl?: string) {
    super()
    this.sitemapUrl = sitemapUrl || ''
  }

  ping = async (sitemapUrl?: string): Promise<number | never> => {
    const url = sitemapUrl || this.sitemapUrl
    if (!url) {
      throw Error('Argument error')
    }
    const result = await http.get('', {
      searchParams: {
        sitemap: url,
      },
    })

    console.log(result)

    return result.statusCode
  }
}
