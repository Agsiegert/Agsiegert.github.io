import jobObjIcon from 'assets/images/job_obj.svg';
import SectionWidget from 'Widgets/SectionWidget/SectionWidgetClass';
import {
  metaDataEditingConfigAttributes,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('Job', {
  title: 'Job',
  thumbnail: `/${jobObjIcon}`,
  attributes: {
    ...metaDataEditingConfigAttributes,
    image: {
      title: 'Image',
    },
    location: {
      title: 'Location',
      description: 'Where is this job located?',
    },
    title: {
      title: 'Title',
      description: 'Limit to 55 characters.',
    },
  },
  properties: [
    'title',
    'location',
    'image',
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    body: [new SectionWidget({})],
  },
  titleForContent: obj => obj.get('title'),
});
