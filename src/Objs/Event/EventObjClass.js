import { registerTextExtract } from 'utils/textExtractRegistry';
import metaDataAttributes from '../_metaDataAttributes';

const Event = Scrivito.provideObjClass('Event', {
  attributes: {
    body: ['widgetlist', { only: 'SectionWidget' }],
    date: 'date',
    image: 'reference',
    location: 'string',
    title: 'string',
    tags: 'stringlist',
    ...metaDataAttributes,
  },
});

registerTextExtract('Event', [
  { attribute: 'location', type: 'string' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Event;
