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
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: ['House', 'Land'],
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
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: ['Port Harcourt', 'Lagos', 'Abuja'],
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'propertyImage'
    },
  },
});