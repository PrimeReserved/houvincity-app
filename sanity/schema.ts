import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import news from './schemaTypes/news'
import propertyListing from './schemaTypes/property'
import subscription from './schemaTypes/subscription'
import testimony from './schemaTypes/testimony'
import event from './schemaTypes/event'
import contact from './schemaTypes/contact'
import payment from './schemaTypes/payment'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    news,
    propertyListing,
    subscription,
    testimony,
    event,
    contact,
    payment
  ],
}
