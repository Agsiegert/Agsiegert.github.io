import { registerTextExtract } from 'utils/textExtractRegistry';
import { socialCardsAttributes } from '../_metaDataAttributes';
import { defaultPageAttributes } from '../_defaultPageAttributes';

const Page = Scrivito.provideObjClass('Page', {
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    ...socialCardsAttributes,
  },
});

registerTextExtract('Page', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Page;
