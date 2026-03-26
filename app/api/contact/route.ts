// app/api/contact/route.ts

import { client } from '@/sanity/client';
import { validateFields } from '@/utils/helper-functions/validateFields';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const requiredFields: { [key in keyof FormData]?: string } = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'Email',
  phoneNumber: 'PhoneNumber',
  message: 'Message',
};

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    const validationError = validateFields(formData, requiredFields);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const { firstName, lastName, email, phoneNumber, message } = formData;

    // 1. Save to Sanity (keep existing behaviour)
    const data = {
      _type: 'contact',
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };
    const result = await client.create(data);

    // 2. Send email via Resend
    const { error: resendError } = await resend.emails.send({
      from: 'Houvin City <noreply@houvincity.com>', // must match your verified Resend domain
      to: [process.env.COMPANY_EMAIL!],
      replyTo: email,
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
          <tr>
            <td style="padding:8px;border:1px solid #ddd;"><strong>Name</strong></td>
            <td style="padding:8px;border:1px solid #ddd;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;"><strong>Email</strong></td>
            <td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;"><strong>Phone</strong></td>
            <td style="padding:8px;border:1px solid #ddd;">${phoneNumber}</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;"><strong>Message</strong></td>
            <td style="padding:8px;border:1px solid #ddd;">${message}</td>
          </tr>
        </table>
      `,
    });

    if (resendError) {
      // Sanity save succeeded but email failed — log it, don't block the user
      console.error('Resend error:', resendError);
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error: unknown) {
    console.error('Error in contact route:', error);
    return NextResponse.json(
      { error: (error as Error).message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
