// pages/api/subscribe/route.ts

import { client } from "@/sanity/client";
import { NextRequest, NextResponse } from "next/server";

// Define the schema for the incoming data
interface SubscriptionData {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const { email }: SubscriptionData = await request.json();

    // Validate the incoming data
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const data = {
      _type: 'newsletterSubscription',
      email: email,
    };

    // Create the new subscription in Sanity
    const result = await client.create(data);

    // Respond with the created subscription
    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    console.error("Error creating subscription:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
