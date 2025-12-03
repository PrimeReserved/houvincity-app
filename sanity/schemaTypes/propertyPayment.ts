// sanity/schemaTypes/propertyPayment.ts
import { type SchemaTypeDefinition } from 'sanity';

const propertyPayment: SchemaTypeDefinition = {
  name: 'propertyPayment',
  title: 'Property Payment Status',
  type: 'document',
  fields: [
    // Customer Information - Read-only after creation
    {
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },

    // Property Information - Read-only after creation
    {
      name: 'propertyReference',
      title: 'Property',
      type: 'reference',
      to: [{ type: 'property' }],
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'propertyTitle',
      title: 'Property Title',
      type: 'string',
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'propertyLocation',
      title: 'Property Location',
      type: 'string',
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'propertySize',
      title: 'Property Size',
      type: 'string',
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },

    // Payment Details - Read-only after creation
    {
      name: 'totalPropertyPrice',
      title: 'Total Property Price (₦)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'amountPaid',
      title: 'Amount Paid (₦)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'remainingBalance',
      title: 'Remaining Balance (₦)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'paymentType',
      title: 'Payment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full Payment', value: 'full' },
          { title: 'Installment Payment', value: 'installment' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'paymentReference',
      title: 'Payment Reference (Paystack)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !!document?._id,
      description:
        '🔒 Locked after payment is created - Paystack transaction reference',
    },
    {
      name: 'paymentDate',
      title: 'Payment Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },
    {
      name: 'paystackData',
      title: 'Paystack Transaction Data',
      type: 'paystackData',
      readOnly: ({ document }) => !!document?._id,
      description: '🔒 Locked after payment is created',
    },

    // Admin Editable Fields
    {
      name: 'status',
      title: 'Payment Status',
      type: 'boolean',
      description: '✅ Admin can update - Is payment completed and valid?',
      validation: (Rule) => Rule.required(),
      initialValue: true,
    },
    {
      name: 'verified',
      title: 'Verified on Paystack',
      type: 'boolean',
      description: '✅ Admin can update - Confirmed in Paystack dashboard',
      initialValue: false,
    },
    {
      name: 'adminNotes',
      title: 'Admin Notes',
      type: 'text',
      description: '✅ Admin can update - Internal notes about this payment',
      rows: 4,
    },
    {
      name: 'followUpRequired',
      title: 'Follow-up Required',
      type: 'boolean',
      description: '✅ Admin can update - Flag if this payment needs follow-up',
      initialValue: false,
    },
    {
      name: 'nextPaymentDue',
      title: 'Next Payment Due Date',
      type: 'date',
      description: '✅ Admin can update - For installment payments',
      hidden: ({ document }) => document?.paymentType !== 'installment',
    },
    {
      name: 'documentsIssued',
      title: 'Documents Issued',
      type: 'array',
      description: '✅ Admin can track documents given to customer',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'documentType',
              title: 'Document Type',
              type: 'string',
              options: {
                list: [
                  'Receipt',
                  'Contract',
                  'Title Deed',
                  'Survey Plan',
                  'Certificate of Occupancy',
                  'Deed of Assignment',
                  'Other',
                ],
              },
            },
            {
              name: 'dateIssued',
              title: 'Date Issued',
              type: 'date',
            },
            {
              name: 'notes',
              title: 'Notes',
              type: 'text',
              rows: 2,
            },
          ],
          preview: {
            select: {
              title: 'documentType',
              date: 'dateIssued',
            },
            prepare({ title, date }) {
              return {
                title: title || 'Unknown Document',
                subtitle: date
                  ? new Date(date).toLocaleDateString()
                  : 'No date',
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'fullname',
      subtitle: 'propertyTitle',
      amount: 'amountPaid',
      paymentType: 'paymentType',
      verified: 'verified',
      status: 'status',
    },
    prepare(selection) {
      const { title, subtitle, amount, paymentType, verified, status } =
        selection;
      const statusIcon = !status ? '🔴' : verified ? '✅' : '⚠️';
      return {
        title: `${statusIcon} ${title}`,
        subtitle: `${subtitle} - ₦${amount?.toLocaleString() || 0} (${
          paymentType === 'full' ? 'Full Payment' : 'Installment'
        })`,
      };
    },
  },
  orderings: [
    {
      title: 'Payment Date, Newest First',
      name: 'paymentDateDesc',
      by: [{ field: 'paymentDate', direction: 'desc' }],
    },
    {
      title: 'Payment Date, Oldest First',
      name: 'paymentDateAsc',
      by: [{ field: 'paymentDate', direction: 'asc' }],
    },
    {
      title: 'Amount, Highest First',
      name: 'amountDesc',
      by: [{ field: 'amountPaid', direction: 'desc' }],
    },
    {
      title: 'Unverified Payments',
      name: 'unverifiedFirst',
      by: [{ field: 'verified', direction: 'asc' }],
    },
  ],
};

export default propertyPayment;
