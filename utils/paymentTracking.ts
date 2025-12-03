// utils/paymentTracking.ts

/**
 * Generate a unique reference code that includes user and property data
 * Format: [propertySlug]-[emailHash]-[timestamp]
 * Example: luxury-apartment-john5a7b3-1764759869448
 */
export function generatePaymentReference(
  propertySlug: string,
  userEmail: string
): string {
  // Extract first 4 chars of email (before @) for readability
  const emailPart = userEmail.split('@')[0].substring(0, 4).toLowerCase();

  // Create a simple hash from the full email for uniqueness
  const emailHash = userEmail
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
    .toString(36)
    .substring(0, 5);

  // Combine property slug, email parts, and timestamp
  return `${propertySlug}-${emailPart}${emailHash}-${Date.now()}`;
}

/**
 * Parse a reference code to extract property and user info
 */
export function parsePaymentReference(reference: string): {
  propertySlug: string;
  userIdentifier: string;
  timestamp: number;
} | null {
  const parts = reference.split('-');
  if (parts.length < 3) return null;

  const timestamp = parseInt(parts[parts.length - 1]);
  const userIdentifier = parts[parts.length - 2];
  const propertySlug = parts.slice(0, -2).join('-');

  return { propertySlug, userIdentifier, timestamp };
}

/**
 * Calculate total paid and remaining balance for a property by a user
 */
export async function getUserPaymentStatus(
  userEmail: string,
  propertyId: string
): Promise<{
  totalPaid: number;
  remainingBalance: number;
  paymentHistory: any[];
  propertyPrice: number;
  hasExistingPayments: boolean;
  propertyDetails: any;
}> {
  try {
    const response = await fetch(
      `/api/get-payment-status?email=${encodeURIComponent(userEmail)}&propertyId=${propertyId}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch payment status');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching payment status:', error);
    return {
      totalPaid: 0,
      remainingBalance: 0,
      paymentHistory: [],
      propertyPrice: 0,
      hasExistingPayments: false,
      propertyDetails: null,
    };
  }
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString()}`;
}

/**
 * Calculate percentage paid
 */
export function calculatePercentagePaid(
  totalPaid: number,
  propertyPrice: number
): number {
  if (propertyPrice === 0) return 0;
  return Math.round((totalPaid / propertyPrice) * 100);
}
