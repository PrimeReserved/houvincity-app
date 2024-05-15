import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimony",
  title: "Testimony",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "review",
      title: "Review",
      type: "number",
    }),
    defineField({
      name: "authorImage",
      title: "Author image",
      type: "image",
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
      media: "propertyImage",
    },
  },
});
