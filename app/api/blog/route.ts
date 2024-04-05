// app/api/blog/route.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type NewsAPIResponse = {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: string | null;
      name: string;
    };
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content?: string;
  }[];
};

// export default async function GET(
//   req: NextApiRequest,
//   res: NextApiResponse<NewsAPIResponse | { error: string }>
// ) {
//   const apiKey = 'a31d266b3ff144a288c9ddd30df7763d'; // Replace with your API key
//   const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

//   try {
//     const response = await axios.get<NewsAPIResponse>(url);
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error(`Error occurred: ${error}`);
//     res.status(500).json({ error: `Failed to fetch data: ${error}` });
//   }
// }

export async function GET() {

  const apiKey = 'a31d266b3ff144a288c9ddd30df7763d'; // Replace with your API key
  const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json();
  console.log(data);

  return Response.json({ data })
}