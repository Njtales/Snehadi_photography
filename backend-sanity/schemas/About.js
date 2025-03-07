export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'photography title',
            title: 'Photography Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
