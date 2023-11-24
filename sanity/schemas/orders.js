export default {
    name: 'orders',
    type: 'document',
    title: 'Orders',
    options: {
        hotspot: true // <-- Defaults to false
    },
    fields: [
        {
            name: 'title',
            type: 'array',
            of: [{ type: 'string' }],
            title: 'Title'
        },
        {
            name: 'description',
            type: 'array',
            of: [{ type: 'string' }],
            title: 'Description'

        }
    ]

}