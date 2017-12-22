import { registerTextExtract } from 'utils/textExtractRegistry';
import { socialCardsAttributes } from '../_metaDataAttributes';

const BlogPost = Scrivito.provideObjClass('BlogPost', {
  attributes: {
    author: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
    publishedAt: 'date',
    subtitle: 'string',
    tags: 'stringlist',
    title: 'string',
    titleImage: 'reference',
    ...socialCardsAttributes,
  },
});

registerTextExtract('BlogPost', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default BlogPost;
