import landingPageObjIcon from 'assets/images/landing_page_obj.svg';
import {
  defaultGeneralProperties,
  defaultInitialContent,
  defaultPageUiConfigAttributes,
} from '../_defaultPageEditingConfig';
import {
  metaDataEditingConfigAttributes,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('LandingPage', {
  title: 'Landing Page',
  thumbnail: `/${landingPageObjIcon}`,
  attributes: {
    ...defaultPageUiConfigAttributes,
    ...metaDataEditingConfigAttributes,
  },
  properties: [
    ...defaultGeneralProperties,
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...defaultInitialContent,
  },
  titleForContent: obj => obj.get('title'),
});
