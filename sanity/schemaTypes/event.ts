import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  description: "Live Property Streaming",
  fields: [defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
        source: 'title',
        maxLength: 96,
      },
  }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      description:
        "A short summary of the event, no more than 2 or 3 sentences",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      description: "A full description of the event",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "start",
      title: "Start time",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "end",
      title: "End time",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Property image",
      type: "image",
      description: "An image relevant to the event",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "thumbnail",
    },
  },
});
