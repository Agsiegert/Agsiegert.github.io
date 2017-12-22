import eventObjIcon from 'assets/images/event_obj.svg';
import SectionWidget from 'Widgets/SectionWidget/SectionWidgetClass';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('Event', {
  title: 'Event',
  thumbnail: `/${eventObjIcon}`,
  attributes: {
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
  propertiesGroups: [socialCardsCustomGroup],
  initialContent: {
    body: [new SectionWidget({})],
  },
  titleForContent: obj => obj.get('title'),
});
