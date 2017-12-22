import PageObjIcon from 'assets/images/page_obj.svg';
import { socialCardsCustomGroup } from '../_metaDataEditingConfig';
import {
  defaultGeneralProperties,
  defaultInitialContent,
  defaultPageUiConfigAttributes,
} from '../_defaultPageEditingConfig';

Scrivito.provideEditingConfig('Page', {
  title: 'Page',
  thumbnail: `/${PageObjIcon}`,
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
