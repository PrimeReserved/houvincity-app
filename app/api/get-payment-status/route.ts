// app/api/get-payment-status/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/client';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const propertyId = searchParams.get('propertyId');

    if (!email || !propertyId) {
      return NextResponse.json(
        { error: 'Email and propertyId are required' },
        { status: 400 }
      );
    }

    // Fetch all successful payments for this user and property
    const payments = await client.fetch(
      `*[_type == "propertyPayment" && email == $email && propertyReference._ref == $propertyId && status == true] | order(paymentDate desc) {
        _id,
        amountPaid,
        remainingBalance,
        paymentDate,
        paymentReference,
        paymentType,
        status,
        fullname,
        phoneNumber,
        totalPropertyPrice
      }`,
      { email, propertyId }
    );

    // Fetch property details to get the total price
    const property = await client.fetch(
      `*[_type == "property" && _id == $propertyId][0] {
        budget,
        title,
        location,
        soldOut,
        slug
      }`,
      { propertyId }
    );

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      );
    }

    const propertyPrice = property.budget
      ? parseFloat(property.budget.replace(/,/g, ''))
      : 0;

    // Calculate total paid from all successful payments
    const totalPaid = payments.reduce(
      (sum: number, payment: any) => sum + (payment.amountPaid || 0),
      0
    );

    const remainingBalance = Math.max(0, propertyPrice - totalPaid);
    const hasExistingPayments = payments.length > 0;

    return NextResponse.json({
      totalPaid,
      remainingBalance,
      paymentHistory: payments,
      propertyPrice,
      hasExistingPayments,
      propertyDetails: {
        title: property.title,
        location: property.location,
        soldOut: property.soldOut || false,
        slug: property.slug?.current || '',
      },
    });
  } catch (error) {
    console.error('Error fetching payment status:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payment status' },
      { status: 500 }
    );
  }
}
