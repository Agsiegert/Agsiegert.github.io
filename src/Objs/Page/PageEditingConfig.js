import PageObjIcon from 'assets/images/page_obj.svg';
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

Scrivito.provideEditingConfig('Page', {
  title: 'Page',
  thumbnail: `/${PageObjIcon}`,
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
