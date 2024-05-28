// api/blog/[slug]/route.ts

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const query = groq`*[_type == "post" && slug.current == $slug][0]{
        ...
    }`;
    const response = await client.fetch(query, { slug });
    console.log("Query response:", response); // 
    if (!response) {
      throw new Error(`Could not get a single blog post`);
    }
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json({ error: error || "Internal Server Error" }, { status: 500 });
  }
}
