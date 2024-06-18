import { defineField, defineType } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: ["House", "Land"],
      },
    }),
    defineField({
      name: "propertyImage",
      title: "Property Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "fullPropertyImage",
      title: "Full Property Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "leftSidePropertyImage",
      title: "Left Side Property Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "rightSidePropertyImage",
      title: "Right Side Property Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "middlePropertyImage",
      title: "Middle Property Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "youtubeLink",
      title: "Youtube Link",
      type: "string",
    }),
    defineField({
      name: "legalSurvey",
      title: "Legal Survey",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      options: {
        list: ["Port Harcourt", "Lagos", "Abuja"],
      },
    }),
    defineField({
      name: "propertySize",
      title: "Property Size",
      type: "string",
      options: {
        list: ["500m² - 5,000m²", "5000m² - 10,000m²", "10,000m² - 20,000m²"],
      },
    }),
    defineField({
      name: "budget",
      title: "Budget",
      type: "string",
      options: {
        list: [
          "₦(10 Million to 50 Million)",
          "₦(50 Million to 100 Million)",
          "₦(100 Million to 200 Million)",
        ],
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "installmentPaymentOptions",
      title: "InstallmentPaymentOptions",
      type: "object",
      fields: [
        {
          name: "enabled",
          type: "boolean",
        },
        {
          name: "numInstallments",
          type: "number",
        },
        {
          name: "installmentAmount",
          type: "number",
        },
        {
          name: "paymentSchedule",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Payment Schedule Name", type: "string" },
                { name: "amount", title: "Payment Amount", type: "number" },
                { name: "purchased", title: "Purchased", type: "boolean" },
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
                { name: 'description', title: 'Payment Plan Description', type: 'text' },
                { name: 'percentage', title: 'Payment Plan Percentage', type: 'number' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "plots",
      title: "Plots",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "size", title: "Plot Size", type: "string" },
            { name: "amount", title: "Plot Amount", type: "number" },
            { name: "purchased", title: "Purchased", type: "boolean" },
          ],
        },
      ],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "boolean",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "propertyImage",
      status: "status",
    },
  },
});
