// app/api/property-payment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullname,
      email,
      address,
      city,
      state,
      company,
      phoneNumber,
      propertyId,
      propertyTitle,
      propertyLocation,
      propertySize,
      totalPropertyPrice,
      amountPaid,
      remainingBalance,
      paymentType,
      reference,
      status,
      paymentDate,
      // NEW fields for tracking
      previousTotalPaid,
      hasExistingPayments,
      paymentNumber,
    } = body;

    // Validate required fields
    if (!email || !fullname || !propertyId || !amountPaid || !reference) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create payment document in Sanity
    const paymentDoc = await client.create({
      _type: 'propertyPayment',
      fullname,
      email,
      phoneNumber,
      company: company || '',
      address,
      city,
      state,
      propertyReference: {
        _type: 'reference',
        _ref: propertyId,
      },
      propertyTitle,
      propertyLocation,
      propertySize,
      totalPropertyPrice,
      amountPaid,
      remainingBalance,
      paymentType,
      paymentReference: reference,
      paymentDate,
      status,
      verified: false, // Admin will verify later
      // NEW: Add metadata about previous payments
      adminNotes: hasExistingPayments
        ? `Payment #${paymentNumber}. Customer had previously paid ₦${previousTotalPaid?.toLocaleString()}. This is an installment payment.`
        : `Payment #1. This is the customer's first payment for this property.`,
      followUpRequired: remainingBalance > 0, // Auto-flag if balance remains
    });

    console.log('✅ Payment saved to Sanity:', paymentDoc);

    return NextResponse.json(
      {
        message: 'Payment saved successfully',
        payment: paymentDoc,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error saving payment:', error);
    return NextResponse.json(
      { error: 'Failed to save payment', details: error },
      { status: 500 }
    );
  }
}
