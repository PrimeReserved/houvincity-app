/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
<<<<<<< HEAD
import { presentationTool } from 'sanity/presentation'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import { schema } from './sanity/schema'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNabar'
import Logo from '@/components/Logo'

export default defineConfig({
  basePath: '/studio',
  name: "Houvincity",
  title: "Real Estate Property Management",
  projectId,
  dataset,
  apiVersion,
  schema,
  theme: myTheme,
  studio: {
    components: {
      navbar: StudioNavbar
    }
  },
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
=======

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNabar'
import Logo from '@/components/Logo'

export default defineConfig({
  basePath: '/studio',
  name: "Houvincity",
  title: "Real Estate Property Management",
  projectId,
  dataset,
  schema,
  theme: myTheme,
  studio: {
    components: {
      navbar: StudioNavbar
    }
  },
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
>>>>>>> b361d4b (I worked on the Property Listing Card)
  ],
})
