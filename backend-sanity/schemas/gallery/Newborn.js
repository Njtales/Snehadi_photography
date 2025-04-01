export default {
    name: 'newbornGallery',
    title: 'Newborn Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'imgUrl',
        title: 'Image',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'altText',
        title: 'Alt Text',
        type: 'string'
      }
    ]
  }
  