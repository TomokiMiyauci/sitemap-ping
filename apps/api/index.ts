import { NowApiHandler, NowRequest, NowResponse } from '@now/node'
import got from 'got'

import { allowCors } from './utils'

const handler: NowApiHandler = async (req: NowRequest, res: NowResponse) => {
  const { sitemapUrl } = req.body as { sitemapUrl: string }
  const result = await got.get('https://google.com')

  res.status(result.statusCode).json({
    message: result.body,
    body: sitemapUrl,
  })
}

export default allowCors(handler)
