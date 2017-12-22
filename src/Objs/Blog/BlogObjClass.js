import { registerTextExtract } from 'utils/textExtractRegistry';
import { socialCardsAttributes } from '../_metaDataAttributes';

const Blog = Scrivito.provideObjClass('Blog', {
  attributes: {
    title: 'string',
    navigationBackgroundImage: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
    ...socialCardsAttributes,
  },
});

registerTextExtract('Blog', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default Blog;
