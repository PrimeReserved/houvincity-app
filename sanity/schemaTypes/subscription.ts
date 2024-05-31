import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsletterSubscription",
  title: "Newsletter Subscription",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15
      }
    }),
  ],
});
