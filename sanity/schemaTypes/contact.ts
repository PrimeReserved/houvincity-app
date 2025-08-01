import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact Submissions',
  type: 'document',
  description: 'Website Contact Form Submissions',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
      description: "Customer's message from the contact form",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submissionDate',
      title: 'Submission Date',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
      description: 'Add any notes about this contact submission',
      rows: 3,
    }),
  ],

  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      submissionDate: 'submissionDate',
    },
    prepare(selection) {
      const { firstName, lastName, email, submissionDate } = selection;
      const date = submissionDate
        ? new Date(submissionDate).toLocaleDateString()
        : '';

      return {
        title: `${firstName} ${lastName}`,
        subtitle: `${email} • ${date}`,
      };
    },
  },

  orderings: [
    {
      title: 'Newest First',
      name: 'submissionDateDesc',
      by: [{ field: 'submissionDate', direction: 'desc' }],
    },
    {
      title: 'Oldest First',
      name: 'submissionDateAsc',
      by: [{ field: 'submissionDate', direction: 'asc' }],
    },
  ],

  initialValue: {
    submissionDate: () => new Date().toISOString(),
  },
});
