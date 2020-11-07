import { MissingParameterError } from './error'
import { isValidUrl } from './validation'

export abstract class SearchEngine {
  private sitemapUrl?: string
  url: string = ''
  constructor(sitemapUrl?: string) {
    this.sitemapUrl = sitemapUrl
  }
  abstract ping(): Promise<number | never>

  check(sitemapUrl?: string): boolean | never {
    this.url = sitemapUrl || this.sitemapUrl || ''
    if (!this.url) throw new MissingParameterError()

    return isValidUrl(this.url)
  }
}

export default SearchEngine
