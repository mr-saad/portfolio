import {defineConfig, isDev} from 'sanity'

import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'saadkhatri',

  projectId: '7ok4ncg8',
  dataset: 'production',

  plugins: [
    structureTool(),
    colorInput(),
    imageHotspotArrayPlugin(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
