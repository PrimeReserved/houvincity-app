import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  description: "Live Property Streaming",
  fields: [
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
      name: "start",
      title: "Start date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "end",
      title: "End date",
      type: "datetime",
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
      title: "title",
      media: "authorImage",
    },
  },
});
