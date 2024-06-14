import { defineField, defineType } from "sanity";

export default defineType({
  name: "status",
  title: "Payment Status",
  type: "document",
  fields: [
    defineField({
      name: "fullname",
      title: "Fullname",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "fullname",
        maxLength: 96,
      },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
        name: "phoneNumber",
        title: "PhoneNumber",
        type: "string",
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
