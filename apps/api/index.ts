import { NowApiHandler, NowRequest, NowResponse } from '@now/node'
import { Google } from 'sitemaping'

import { allowCors } from './utils'

const handler: NowApiHandler = async (
  { body }: NowRequest,
  res: NowResponse
) => {
  const { sitemapUrl } = body as { sitemapUrl: string }

  const google = new Google(sitemapUrl)

  const result = await google.ping()

  res.status(result).json({
    message: result,
    body: sitemapUrl,
  })
}
export default allowCors(handler)
