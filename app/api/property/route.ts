// api/property/route.ts

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const query = groq`*[_type == "property"]`;
    const response = await client.fetch(query);
    if (!response) {
      throw new Error(`Could not fetch properties`);
    }
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
