import { createClient } from 'contentful'
import _ from 'lodash'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const createContentfulClient = () =>
  createClient({
    space: 'r1hg9m75veq3',
    accessToken: 'cUHQvlK_jsdMBLoK3rHSllIOH7pDim4Mac-FU7wkkLg',
    host: 'cdn.contentful.com'
  })

const getContentfulItems = async client => {
  let itemsByType = {};

  (await client.getEntries())
  .items.forEach(item => {
    const _item = {
      id: item.sys.id,
      ..._.mapValues(
        item.fields,
        field => parseField(field)
      )
    }
    const type = item.sys.contentType.sys.id + 's'
  
    itemsByType.hasOwnProperty(type) ?
      itemsByType[type].push(_item)
      :
      itemsByType[type] = [_item]
  })

  return itemsByType
}

const parseField = field => {
  switch(field?.nodeType || field?.sys?.type) {
    case 'document':
      return parseContentfulText(field)
    case 'Asset':
      return field?.fields?.file
    default:
      return field
  }
}

const parseContentfulText = document =>
  documentToReactComponents(document)

export {
  createContentfulClient,
  getContentfulItems
}