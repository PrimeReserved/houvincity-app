// sanity/schemaTypes/paystackData.ts
import { type SchemaTypeDefinition } from 'sanity';

const paystackData: SchemaTypeDefinition = {
  name: 'paystackData',
  title: 'Paystack Transaction Data',
  type: 'object',
  fields: [
    {
      name: 'amount',
      title: 'Amount (in kobo)',
      type: 'number',
      description: 'Amount in kobo (₦1 = 100 kobo)',
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      description: 'Usually NGN',
    },
    {
      name: 'channel',
      title: 'Payment Channel',
      type: 'string',
      description: 'e.g., card, bank, ussd, qr, mobile_money',
    },
    {
      name: 'cardType',
      title: 'Card Type',
      type: 'string',
      description: 'e.g., visa, mastercard',
    },
    {
      name: 'bank',
      title: 'Bank',
      type: 'string',
      description: 'Customer bank name',
    },
    {
      name: 'last4',
      title: 'Card Last 4 Digits',
      type: 'string',
      description: 'Last 4 digits of card used',
    },
    {
      name: 'expMonth',
      title: 'Card Expiry Month',
      type: 'string',
    },
    {
      name: 'expYear',
      title: 'Card Expiry Year',
      type: 'string',
    },
    {
      name: 'brand',
      title: 'Card Brand',
      type: 'string',
    },
    {
      name: 'authorization_code',
      title: 'Authorization Code',
      type: 'string',
      description: 'Paystack authorization code for future charges',
    },
    {
      name: 'gatewayResponse',
      title: 'Gateway Response',
      type: 'string',
      description: 'Response message from payment gateway',
    },
    {
      name: 'transactionDate',
      title: 'Transaction Date',
      type: 'datetime',
      description: 'When Paystack processed the transaction',
    },
    {
      name: 'paidAt',
      title: 'Paid At',
      type: 'datetime',
      description: 'Timestamp when payment was confirmed',
    },
    {
      name: 'fees',
      title: 'Transaction Fees',
      type: 'number',
      description: 'Fees charged by Paystack (in kobo)',
    },
    {
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      description: 'Customer IP address',
    },
  ],
  preview: {
    select: {
      amount: 'amount',
      channel: 'channel',
      bank: 'bank',
    },
    prepare({ amount, channel, bank }) {
      return {
        title: amount ? `₦${(amount / 100).toLocaleString()}` : 'No amount',
        subtitle: `${channel || 'Unknown channel'}${bank ? ` - ${bank}` : ''}`,
      };
    },
  },
};

export default paystackData;
