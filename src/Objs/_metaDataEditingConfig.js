const metaDataEditingConfigAttributes = {
  metaDataDescription: {
    title: 'Page description',
    description: 'Limit to 175, ideally 150 characters.',
  },
};

const metaDataPropertiesGroup = {
  title: 'Meta data',
  properties: [
    'metaDataDescription',
  ],
};

const socialCardsPropertiesGroup = {
  title: 'Social cards',
  component: 'SocialCardsTab',
};

export {
  metaDataEditingConfigAttributes,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
};
