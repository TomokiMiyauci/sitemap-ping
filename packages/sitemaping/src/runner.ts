import { Google } from './google'

export const requestUpdate = async (
  sitemapUrl: string,
  searchEngines: ('google' | 'bing')[]
) => {
  const updateList = searchEngineFactory(searchEngines)
  return await Promise.all(
    updateList.map(async ({ searchEngine, name }) => {
      const status = await new searchEngine(sitemapUrl).ping()
      return { status, name }
    })
  )
}

const searchEngineFactory = (searchEngines: ('google' | 'bing')[]) => {
  return searchEngines.map((searchEngine) => {
    switch (searchEngine) {
      case 'google': {
        return { searchEngine: Google, name: 'google' }
      }

      case 'bing': {
        return { searchEngine: Google, name: 'google' }
      }
    }
  })
}
