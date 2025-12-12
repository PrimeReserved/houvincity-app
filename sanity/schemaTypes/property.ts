import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: ['House', 'Estate', 'Land', 'Commercial Property'],
      },
    }),
    defineField({
      name: 'propertyImage',
      title: 'Property Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'fullPropertyImage',
      title: 'Full Property Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'leftSidePropertyImage',
      title: 'Left Side Property Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rightSidePropertyImage',
      title: 'Right Side Property Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'middlePropertyImage',
      title: 'Middle Property Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'youtubeLink',
      title: 'Youtube Link',
      type: 'string',
    }),
    defineField({
      name: 'legalSurvey',
      title: 'Legal Survey',
      type: 'string',
    }),
    defineField({
      name: 'street',
      title: 'Street',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: ['Rivers State', 'Lagos', 'Abuja'],
      },
    }),
    defineField({
      name: 'propertySize',
      title: 'Property Size',
      type: 'string',
    }),
    defineField({
      name: 'budget',
      title: 'Budget',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'installmentPaymentOptions',
      title: 'InstallmentPaymentOptions',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          type: 'boolean',
        },
        {
          name: 'numInstallments',
          type: 'number',
        },
        {
          name: 'installmentAmount',
          type: 'number',
        },
        {
          name: 'paymentSchedule',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Payment Schedule Name',
                  type: 'string',
                },
                { name: 'amount', title: 'Payment Amount', type: 'number' },
                { name: 'purchased', title: 'Purchased', type: 'boolean' },
              ],
            },
          ],
        },
        {
          name: 'paymentPlan',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Payment Plan Name', type: 'string' },
                {
                  name: 'description',
                  title: 'Payment Plan Description',
                  type: 'text',
                },
                {
                  name: 'percentage',
                  title: 'Payment Plan Percentage',
                  type: 'number',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
    }),
    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'layout',
      title: 'Property Layout',
      type: 'file',
      description: 'Upload property layout (PDF, JPG, or PNG)',
      options: {
        accept: '.pdf,.jpg,.jpeg,.png',
      },
    }),
    defineField({
      name: 'plots',
      title: 'Plots',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'size', title: 'Plot Size', type: 'string' },
            { name: 'amount', title: 'Plot Amount', type: 'number' },
            { name: 'purchased', title: 'Purchased', type: 'boolean' },
          ],
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'boolean',
    }),
    // 🔥 NEW SOLD OUT FIELD
    defineField({
      name: 'soldOut',
      title: 'Sold Out',
      type: 'boolean',
      description:
        'Mark this property as sold out. Users will not be able to view details or interact with it.',
      initialValue: false,
    }),
    // Optional: Add sold date for tracking
    defineField({
      name: 'soldDate',
      title: 'Date Sold',
      type: 'datetime',
      description: 'When was this property sold? (Optional)',
      hidden: ({ document }) => !document?.soldOut,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'propertyImage',
      status: 'status',
      soldOut: 'soldOut',
    },
    prepare({ title, media, status, soldOut }) {
      let subtitle = '';

      if (soldOut) {
        subtitle = '🔴 SOLD OUT';
      } else if (status === true) {
        subtitle = '🟢 Active';
      } else if (status === false) {
        subtitle = '🟡 Inactive';
      } else {
        subtitle = '⚪ Status not set';
      }

      return {
        title: soldOut ? `${title} (SOLD OUT)` : title,
        media,
        subtitle,
      };
    },
  },
});
