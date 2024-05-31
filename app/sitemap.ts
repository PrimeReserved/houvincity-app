import { POSTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/client";

async function getData() {
  const query = POSTS_QUERY

  const data = await client.fetch(query);
  return data;
}



export default async function sitemap() {

  const baseURL = "https://houvincity.com";

  const response = await getData();

  const blogPost = response?.map((post: any) => {
    return {
      url: `${baseURL}/blog/${post?.slug}`,
      lastModified: post?.createdAt
    }
  })
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...blogPost,
  ];
}
