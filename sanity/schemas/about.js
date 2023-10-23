export default {
    name: 'about',
    type: 'document',
    title: 'About',
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