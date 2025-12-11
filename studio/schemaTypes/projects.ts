import {defineField, defineType} from 'sanity'
import {projectBodyDefault} from './defaultValues'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'desc',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      of: [
        defineField({
          type: 'object',
          title: 'Technology',
          name: 'technology',
          fields: [
            {type: 'string', title: 'Technology', name: 'tech'},
            {type: 'string', title: 'URL', name: 'tech_url'},
          ],
        }),
      ],
    },
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}],
    }),
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
})
