import { NowApiHandler, NowRequest, NowResponse } from '@now/node'
import { requestUpdate } from 'sitemaping'

import { allowCors } from './utils'

type Body = {
  sitemapUrl: string
  searchEngines: ('google' | 'bing')[]
}

const handler: NowApiHandler = async (
  { body }: NowRequest,
  res: NowResponse
) => {
  const { sitemapUrl, searchEngines } = body as Body

  const result = await requestUpdate(sitemapUrl, searchEngines)

  const partOfFail = result.some(({ status }) => status !== 200)

  res.status(partOfFail ? 500 : 200).json({
    message: result,
  })
}
export default allowCors(handler)
