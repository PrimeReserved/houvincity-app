<<<<<<< HEAD
// ./sanity/lib/client.ts

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId, useCdn } from "../env";
=======
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
>>>>>>> b361d4b (I worked on the Property Listing Card)

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
<<<<<<< HEAD
  // These settings will be overridden in 
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
=======
})
>>>>>>> b361d4b (I worked on the Property Listing Card)
