export default {
    name: 'cakes',
    type: 'document',
    title: 'Cakes',
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
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'cakeimage',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'ingredients',
            type: 'array',
            of: [{ type: 'string' }],
            title: 'Ingredients'
        },
        {
            name: 'slugurl',
            type: 'slug',
            title: 'Slug',
        }

    ]

}