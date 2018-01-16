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
    locationName: {
      title: 'Location name',
      description: 'E.g. New York Convention Center',
    },
    locationStreetAddress: {
      title: 'Location street address',
      description: 'E.g. 655 W. 34th Street',
    },
    locationLocality: {
      title: 'Location locality',
      description: 'E.g. New York',
    },
    locationRegion: {
      title: 'Location region',
      description: 'E.g. NY or CA',
    },
    locationPostalCode: {
      title: 'Location postal code',
      description: 'E.g. 10001',
    },
    locationCountry: {
      title: 'Location country',
      description: 'E.g. USA',
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
    'locationName',
    'locationStreetAddress',
    'locationLocality',
    'locationRegion',
    'locationPostalCode',
    'locationCountry',
    'image',
    'tags',
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
    body: [new SectionWidget({})],
  },
});
