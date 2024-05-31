// ./sanity/lib/token.ts

import 'server-only'


export const token = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_READ_TOKEN

if (!token) {
  throw new Error('Missing SANITY_STUDIO_API_READ_TOKEN')
}
