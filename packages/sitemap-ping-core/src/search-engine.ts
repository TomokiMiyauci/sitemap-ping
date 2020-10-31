export abstract class SearchEngine {
  sitemapUrl: string
  constructor(sitemapUrl: string) {
    this.sitemapUrl = sitemapUrl
  }
  abstract ping = () => {}
}

export default SearchEngine
