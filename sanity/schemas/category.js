import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of Category',
      type: 'image',
    },
  ],
})
