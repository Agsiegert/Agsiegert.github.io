import authorObjIcon from 'assets/images/author_obj.svg';
import { socialCardsCustomGroup } from '../_metaDataAttributes';

Scrivito.provideEditingConfig('Author', {
  title: 'Author',
  thumbnail: `/${authorObjIcon}`,
  attributes: {
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
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});
