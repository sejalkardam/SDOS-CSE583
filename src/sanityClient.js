import { createClient } from "@sanity/client";

const client = createClient({
    projectId: 'o5i9foig',
    dataset: 'production'
});

export default client;


// import client from '@sanity/client'

// export default client({
//     projectId: 'fifev1uu',
//     dataset: 'blogs',
//     useCdn: true,
//     apiVersion: '2022-09-19',
// })