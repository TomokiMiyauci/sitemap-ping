import got from 'got'

import { BASE_URL_GOOGLE } from './constrans'
import SearchEngine from './search-engine'

const http = got.extend({
  prefixUrl: BASE_URL_GOOGLE,
})

export class Google implements SearchEngine {
  sitemapUrl: string
  baseUrl: string = ''
  constructor() {
    this.sitemapUrl = ''
  }
  ping = async () => {
    const result = await http.get('', {
      searchParams: {
        sitemap: 'https://sjfosif.dev/sitemap.xml',
      },
    })

    console.log(result.statusCode)

    return result.statusCode
  }
}
