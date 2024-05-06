// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

// Retrieve the oldest posts first

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]
{
    slug{
      current,
    },
    title,
    publishedAt,
    mainImage{
        alt,
        asset{
            _ref,
        },
    },
    author->{
      slug{
        current,
      },
      name,
      image{
        alt,
        asset->{
          _ref,
        },
      },
      publishedAt,
    },
    body[]{
        children[]{
            text,
        },
    },
    categories[]->
} | order(_createdAt asc)`;

// Retrieve only the most recent post first
export const RECENT_POSTS_QUERY = groq`*[_type == "post"]
{
    slug{
      current,
    },
    publishedAt,
    mainImage{
        alt,
        asset{
            _ref,
        },
    },
    author->,
    body[]{
        children[]{
            text,
        },
    },
    categories[]->
} | order(_createdAt desc)`;

//  filtering posts based on a specific category
export const CATEGORIES_QUERY = groq`*[_type == "post" && references(categories[]->slug.current, 'categorySlug')]{
    slug{
      current,
    },
    mainImage{
      alt,
      asset{
        _ref,
      },
    },
    author->,
    body[]{
      children[]{
        text,
      },
    },
    categories[]->
  }
  `;

// Get a single post by its slug.
export const POST_QUERY = groq`*[_type == 'post' && slug.current == $slug][0]{
  ...,
  body,
  author->{
    slug{
      current,
    },
    name,
    image{
      alt,
      asset{
        _ref,
      },
    },
  },
}`;


// Construct a new query to fetch the author data based on the reference ID
export const AUTHOR_QUERY = groq`
*[_id == $authorId] {
  _createdAt,
  name,
  image {
    alt,
    asset->{
      url
    }
  }
  publishedAt,
}[0]
`;


// Retrive news
export const NEWS_QUERY = groq`*[_type == "news" && defined(slug)]
{
    slug{
      current,
    },
    title,
    publishedAt,
    mainImage{
        alt,
        asset{
            _ref,
        },
    },
    author->{
      slug{
        current,
      },
      name,
      image{
        alt,
        asset->{
          _ref,
        },
      },
      publishedAt,
    },
    body[]{
        children[]{
            text,
        },
    },
    categories[]->
} | order(_createdAt asc)`;


export const SINGLE_NEWS_QUERY = groq`*[_type == 'news' && slug.current == $slug][0]{
  ...,
  body,
  author->{
    slug{
      current,
    },
    name,
    image{
      alt,
      asset{
        _ref,
      },
    },
  },
}`;

/**
 * Queries for property listing
 */

// Query to fetch all property listings:
export const PROPERTY_LISTING_QUERY = groq`*[_type == "property"]{
  ...,
  _id,
  title,
  propertyType,
  'slug': slug.current,
  houseDetails: *[_type == "house" && references(^._id)] {
    bedrooms,
    bathrooms,
    area,
    garage
  },
  landDetails: *[_type == "land" && references(^._id)] {
    landSize
  }
}`;

// Query to fetch a single property by its slug:
export const PROPERTY_LISTING =  groq`*[_type == 'property' && slug.current == $slug][0]{
  ...,
  body,
}`;

