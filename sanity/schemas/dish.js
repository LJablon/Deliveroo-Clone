import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price of dish in USD",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
})
