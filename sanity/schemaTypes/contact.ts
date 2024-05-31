import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Our Contacts",
  type: "document",
  description: "Website Contact Us",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: "firstName",
      title: "Firstname",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastName",
      title: "Lastname",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      description:
        "A short summary of the event, no more than 2 or 3 sentences",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
