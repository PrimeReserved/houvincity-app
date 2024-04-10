import { createClient } from "next-sanity";

export const client = createClient({
<<<<<<< HEAD
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
    ignoreBrowserTokenWarning: true,
    useCdn: true, 
=======
    projectId: "cc49c8xc",
    dataset: "production",
    apiVersion: "2024-01-01",
    // unless you have caching for your front end, `useCdn` should be `true` for most production environments
    useCdn: false, 
>>>>>>> b361d4b (I worked on the Property Listing Card)
})