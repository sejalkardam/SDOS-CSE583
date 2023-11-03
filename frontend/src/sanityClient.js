import { createClient } from "@sanity/client";

const client = createClient({
    projectId: 'o5i9foig',
    dataset: 'production'
});

export default client;