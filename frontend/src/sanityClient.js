import { createClient } from "@sanity/client";

const client = createClient({
    projectId: 'o5i9foig',
    dataset: 'production',
    token: "skewvfVpsoXK6LLeJgWWSOoJxUQEJfpewRfciEeTN5joZhig8gUul2eXRNOriHh3WqmrpQ4bgENFeVEbNbmm8SDv3KzVyFhErU3SFJtrUs3T1ERLcL0tRCzWPw46jsgYfzw8MiV7lYHD8kz6nTWOkHhLhnVOsq6nyoC5qEJfHdLjQlKPQrZG"
});

export default client;