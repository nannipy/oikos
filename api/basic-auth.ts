// pages/api/basic-auth.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const auth = req.headers.authorization || ''

  const expectedUser = process.env.BASIC_AUTH_USER || 'admin'
  const expectedPass = process.env.BASIC_AUTH_PASS || 'password123'

  const expectedAuth = 'Basic ' + Buffer.from(`${expectedUser}:${expectedPass}`).toString('base64')

  if (auth === expectedAuth) {
    // Pass through
    res.status(200).end()
  } else {
    // Reject access
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
    res.status(401).end('Access denied')
  }
}