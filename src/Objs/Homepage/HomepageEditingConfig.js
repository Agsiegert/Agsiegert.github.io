import homepageObjIcon from 'assets/images/homepage_obj.svg';
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
} from '../_defaultPageEditingConfig';
import {
  metaDataEditingConfigAttributes,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('Homepage', {
  title: 'Homepage',
  thumbnail: `/${homepageObjIcon}`,
  attributes: {
    ...defaultPageEditingConfigAttributes,
    ...metaDataEditingConfigAttributes,
    logoDark: {
      title: 'Dark logo',
      description: 'Used with light backgrounds',
    },
    logoWhite: {
      title: 'Light logo',
      description: 'Used with dark backgrounds',
    },
    dividerLogo: {
      title: 'Divider logo',
      description: 'Used in the divider widget',
    },
    facebookAppId: {
      title: 'Facebook app ID',
      description: 'Register at https://developers.facebook.com/docs/apps/register',
    },
    twitterSite: {
      title: 'Twitter site',
      description: 'Needs to be approved at https://cards-dev.twitter.com/validator',
    },
    googleMapsApiKey: {
      title: 'Google Maps API key',
      description: 'Needs to be requested at https://developers.google.com/maps/web/',
    },
  },
  properties: [
    ...defaultPageProperties,
  ],
  propertiesGroups: [
    {
      title: 'Site settings',
      properties: [
        'logoDark',
        'logoWhite',
        'dividerLogo',
        'facebookAppId',
        'twitterSite',
        'googleMapsApiKey',
      ],
    },
    socialCardsPropertiesGroup,
    metaDataPropertiesGroup,
  ],
  initialContent: {
    ...defaultPageInitialContent,
  },
  titleForContent: obj => obj.get('title'),
});
