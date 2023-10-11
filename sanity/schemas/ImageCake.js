// schemas/image.js

export default {
    name: 'Image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true, // Enable image hotspot for cropping
      metadata: ['location', 'palette'], // Include additional metadata in the image
    },
    fields: [
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
        description: 'A brief description of the image (optional)',
      },
      {
        name: 'alt',
        title: 'Alternative Text',
        type: 'string',
        description: 'A short description of the image for accessibility (required)',
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  