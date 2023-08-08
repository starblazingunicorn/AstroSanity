import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the project',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      description: 'Provide a brief overview of the project',
    }),
    defineField({
      name: 'projectGoals',
      title: 'Project Goals',
      type: 'text',
      description: 'Clearly state the main objectives of the project',
    }),
    defineField({
      name: 'toolsAndTechnologies',
      title: 'Tools and Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List the tools, software, and technologies used in the project',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      overview: 'overview',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})
