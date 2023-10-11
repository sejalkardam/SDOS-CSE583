export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    options: {
        hotspot: true // <-- Defaults to false
      },
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image', // Reference the image schema type
        options: {
          hotspot: true, // You can configure hotspot for this specific usage
        },
      }
    ]
    
  }