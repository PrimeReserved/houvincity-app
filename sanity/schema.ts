import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
<<<<<<< HEAD
import news from './schemaTypes/news'
import propertyListing from './schemaTypes/property'
import subscription from './schemaTypes/subscription'
import testimony from './schemaTypes/testimony'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    news,
    propertyListing,
    subscription,
    testimony
  ],
=======

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
>>>>>>> b361d4b (I worked on the Property Listing Card)
}
