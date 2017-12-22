import { registerTextExtract } from 'utils/textExtractRegistry';
import { socialCardsAttributes } from '../_metaDataAttributes';

const Job = Scrivito.provideObjClass('Job', {
  attributes: {
    body: ['widgetlist', { only: 'SectionWidget' }],
    image: 'reference',
    location: 'string',
    title: 'string',
    ...socialCardsAttributes,
  },
});

registerTextExtract('Job', [
  { attribute: 'location', type: 'string' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Job;
