import landingPageObjIcon from 'assets/images/landing_page_obj.svg';
import { socialCardsCustomGroup } from '../_metaDataEditingConfig';
import {
  defaultGeneralProperties,
  defaultInitialContent,
  defaultPageUiConfigAttributes,
} from '../_defaultPageEditingConfig';

Scrivito.provideEditingConfig('LandingPage', {
  title: 'Landing Page',
  thumbnail: `/${landingPageObjIcon}`,
  attributes: {
    ...defaultPageUiConfigAttributes,
  },
  properties: [
    ...defaultGeneralProperties,
  ],
  propertiesGroups: [socialCardsCustomGroup],
  initialContent: {
    ...defaultInitialContent,
  },
  titleForContent: obj => obj.get('title'),
});
