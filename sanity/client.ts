import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION,
    token: process.env.SANITY_API_READ_TOKEN,
    // unless you have caching for your front end, `useCdn` should be `true` for most production environments
    useCdn: true, 
})