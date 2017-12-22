import eventObjIcon from 'assets/images/event_obj.svg';
import SectionWidget from 'Widgets/SectionWidget/SectionWidgetClass';
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('Event', {
  title: 'Event',
  thumbnail: `/${eventObjIcon}`,
  attributes: {
    ...metaDataEditingConfigAttributes,
    date: {
      title: 'Date',
      description: 'When is this event happening?',
    },
    image: {
      title: 'Image',
    },
    location: {
      title: 'Location',
    },
    title: {
      title: 'Title',
      description: 'Limit to 55 characters.',
    },
    tags: {
      title: 'Tags',
      description: 'Which tags can be associated with this event?',
    },
  },
  properties: [
    'title',
    'date',
    'location',
    'image',
    'tags',
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
    body: [new SectionWidget({})],
  },
  titleForContent: obj => obj.get('title'),
});
