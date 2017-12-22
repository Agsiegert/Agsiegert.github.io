import authorObjIcon from 'assets/images/author_obj.svg';
import {
  metaDataEditingConfigAttributes,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('Author', {
  title: 'Author',
  thumbnail: `/${authorObjIcon}`,
  attributes: {
    ...metaDataEditingConfigAttributes,
    title: {
      title: 'Name',
    },
    description: {
      title: 'Description',
    },
    image: {
      title: 'Image',
    },
  },
  properties: [
    'title',
    'description',
    'image',
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  titleForContent: obj => obj.get('title'),
});
