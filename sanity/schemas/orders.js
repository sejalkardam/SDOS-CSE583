export default {
    name: 'orders',
    type: 'document',
    title: 'Orders',
    options: {
        hotspot: true // <-- Defaults to false
    },

    fields: [

        {
            name: 'customerName',
            type: 'string',
            title: 'Customer Name'
        },
        {
            name: 'customerEmail',
            type: 'string',
            title: 'Customer Email'
        },
        {
            name: 'customerPhone',
            type: 'string',
            title: 'Customer Phone'
        },
        {
            name: 'deliveryAddress',
            type: 'string',
            title: 'Delivery Address'
        },
        {
            name: 'dateOfOrder',
            type: 'string',
            title: 'Date Of Order'
        },
        {
            name: 'modeOfPayment',
            type: 'string',
            title: 'Mode Of Payment'
        },
        {
            name: 'orderStatus',
            type: 'string',
            title: 'Order Status'
        },
        {
            name: 'orderTotal',
            type: 'number',
            title: 'Total amount'
        },
        {
            name: 'paymentStatus',
            type: 'string',
            title: 'Payment Status'
        },
        {
            name: 'productName',
            type: 'string',
            title: 'Name of cake'
        },
        {
            name: 'productSlug',
            type: 'string',
            title: 'Slug'
        },
        {
            name: 'productImgUrl',
            type: 'string',
            title: 'Image of cake'
        },
        {
            name: 'cakeSize',
            type: 'string',
            title: 'Size of cake'
        },
        {
            name: 'instructions',
            type: 'string',
            title: 'Instructions'
        },
        
    ]

}