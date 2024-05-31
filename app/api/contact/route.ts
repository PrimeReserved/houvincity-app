// pages/api/subscribe/route.ts

import { client } from "@/sanity/client";
import { NextRequest, NextResponse } from "next/server";

// Define the schema for the incoming data
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const {firstName, lastName, email, phoneNumber, message }: FormData = await request.json();

    // Validate the incoming data
    if (!firstName) {
        return NextResponse.json({ error: "Firstname is required" }, { status: 400 });
      }
      if (!lastName) {
        return NextResponse.json({ error: "Lastname is required" }, { status: 400 });
      }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    if (!phoneNumber) {
        return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
      }
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const data = {
      _type: 'contact',
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      message: message
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
