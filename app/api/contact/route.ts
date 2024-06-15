// app/api/subscribe/route.ts

import { client } from "@/sanity/client";
import { validateFields } from "@/utils/helper-functions/validateFields";
import { NextRequest, NextResponse } from "next/server";

// Define the schema for the incoming data
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

const requiredFields: { [key in keyof FormData]?: string } = {
  firstName: "firstName",
  lastName: "lastName",
  email: "Email",
  phoneNumber: "PhoneNumber",
  message: "Message",
};


export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const formData: FormData = await request.json();

    // Validate the incoming data
    const validationError = validateFields(formData, requiredFields);
    if (validationError) {
        return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const { firstName, lastName, email, phoneNumber, message } = formData;

    const data = {
      _type: 'contact',
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    };

    // Create the new subscription in Sanity
    const result = await client.create(data);

    // Respond with the created subscription
    return NextResponse.json(result, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating subscription:", error);
    return NextResponse.json({ error: (error as Error).message || "Internal Server Error" }, { status: 500 });
  }
}
