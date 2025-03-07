export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
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
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'A short description of the image for accessibility and SEO',
                }
            ],
            validation: Rule => Rule.required()
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'imgUrl'
        },
        prepare(selection) {
            const {title, media} = selection;
            return {
                title,
                media
            };
        }
    }
};
