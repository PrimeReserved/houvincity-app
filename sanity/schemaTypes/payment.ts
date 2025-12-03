import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'status',
  title: 'Payment Status',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullname',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Property reference
    defineField({
      name: 'propertyReference',
      title: 'Property',
      type: 'reference',
      to: [{ type: 'property' }],
      description: 'The property this payment is for',
    }),
    defineField({
      name: 'propertyTitle',
      title: 'Property Title',
      type: 'string',
      description: 'Name of the property purchased',
    }),
    // Payment details
    defineField({
      name: 'amount',
      title: 'Amount Paid',
      type: 'number',
      description: 'Amount in Naira',
    }),
    defineField({
      name: 'paymentReference',
      title: 'Payment Reference',
      type: 'string',
      description: 'Paystack transaction reference',
    }),
    defineField({
      name: 'paymentDate',
      title: 'Payment Date',
      type: 'datetime',
      description: 'When the payment was made',
    }),
    defineField({
      name: 'status',
      title: 'Payment Status',
      type: 'boolean',
      description: 'Whether the payment was successful',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      fullname: 'fullname',
      email: 'email',
      propertyTitle: 'propertyTitle',
      amount: 'amount',
      status: 'status',
      paymentDate: 'paymentDate',
    },
    prepare({ fullname, email, propertyTitle, amount, status, paymentDate }) {
      const formattedAmount = amount ? `₦${amount.toLocaleString()}` : 'N/A';
      const date = paymentDate
        ? new Date(paymentDate).toLocaleDateString()
        : 'N/A';

      return {
        title: `${fullname} - ${formattedAmount}`,
        subtitle: `${propertyTitle || 'No property'} | ${email} | ${date}`,
        media: status ? '✅' : '❌',
      };
    },
  },
});
