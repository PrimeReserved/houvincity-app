// api/testimony/[slug]/route.ts

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const query = groq`*[_type == "testimony" && slug.current == $slug][0]{
        ...
    }`;
    const response = await client.fetch(query, { slug });
    if (!response) {
      throw new Error(`Could not get a single testimony listing`);
    }
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error || "Internal Server Error" }, { status: 500 });
  }
}