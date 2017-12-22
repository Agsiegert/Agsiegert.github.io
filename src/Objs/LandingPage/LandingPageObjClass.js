import { registerTextExtract } from 'utils/textExtractRegistry';
import { socialCardsAttributes } from '../_metaDataAttributes';
import { defaultPageAttributes } from '../_defaultPageAttributes';

const LandingPage = Scrivito.provideObjClass('LandingPage', {
  attributes: {
    ...defaultPageAttributes,
    ...socialCardsAttributes,
  },
});

registerTextExtract('LandingPage', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default LandingPage;
