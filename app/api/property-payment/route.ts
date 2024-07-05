// app/api/subscribe/route.ts

import { client } from "@/sanity/client";
import { NextRequest, NextResponse } from "next/server";
import { validateFields } from "@/utils/helper-functions/validateFields";

// Define the schema for the incoming data
interface FormData {
  fullname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  company: string;
  phoneNumber: string;
}

// Required fields mapping
const requiredFields: { [key in keyof FormData]?: string } = {
  fullname: "Full name",
  email: "Email",
  address: "Address",
  city: "City",
  state: "State",
  company: "Company",
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

    const { fullname, email, address, city, state, company, phoneNumber } = formData;

    const data = {
      _type: "status",
      fullname,
      email,
      address,
      city,
      state,
      company,
      phoneNumber,
    };

    // Create the new subscription in Sanity
    const result = await client.create(data);

    // Respond with the created subscription
    return NextResponse.json(result, { status: 201 });
  } catch (error: unknown) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
