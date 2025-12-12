import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'livestream',
  title: 'Livestream',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the livestream',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video/Stream URL',
      type: 'url',
      description: 'YouTube URL or stream link to be displayed on the livestream page',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'isActive',
      title: 'Active Stream',
      type: 'boolean',
      description: 'Set to true to display this as the active livestream on the website',
      initialValue: false,
    }),
    defineField({
      name: 'scheduledDate',
      title: 'Scheduled Date/Time',
      type: 'datetime',
      description: 'When is this stream scheduled? (Optional)',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Optional thumbnail image for the stream',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      videoUrl: 'videoUrl',
      media: 'thumbnail',
      isActive: 'isActive',
      scheduledDate: 'scheduledDate',
    },
    prepare({ videoUrl, media, isActive, scheduledDate }) {
      const status = isActive ? '🔴 LIVE' : '⚪ Inactive';
      const date = scheduledDate
        ? ` | ${new Date(scheduledDate).toLocaleDateString()}`
        : '';

      return {
        title: videoUrl || 'Livestream',
        media,
        subtitle: `${status}${date}`,
      };
    },
  },
});
