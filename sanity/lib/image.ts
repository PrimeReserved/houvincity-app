import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: any) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}

export const urlForFile = (source: any) => {
  if (!source || !source.asset) return ''

  const ref = source.asset._ref
  if (!ref) return ''

  // Format: file-{id}-{extension}
  const [_file, id, extension] = ref.split('-')

  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
}
