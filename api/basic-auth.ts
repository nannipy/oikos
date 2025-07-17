// pages/api/auth.ts (Next.js pages router)
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const auth = req.headers.authorization

  const expected = 'Basic ' + Buffer.from('user:password123').toString('base64')
  if (auth === expected) {
    res.status(200).end('Access granted')
  } else {
    res.status(401).setHeader('WWW-Authenticate', 'Basic').end('Access denied')
  }
}