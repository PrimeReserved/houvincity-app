/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
<<<<<<< HEAD
=======
console.log(dataset)
>>>>>>> b361d4b (I worked on the Property Listing Card)
export default defineCliConfig({ api: { projectId, dataset } })
