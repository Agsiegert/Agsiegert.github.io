import SectionWidget from 'Widgets/SectionWidget/SectionWidgetClass';

const defaultPageAttributes = {
  body: ['widgetlist', { only: 'SectionWidget' }],
  navigationBackgroundImage: 'reference',
  navigationBackgroundImageGradient: ['enum', { values: ['yes', 'no'] }],
  navigationHeight: ['enum', {
    values: [
      'small',
      'medium-height',
      'full-height',
    ],
  }],
  navigationSection: 'widgetlist',
  title: 'string',
};

const defaultPageUiConfigAttributes = {
  title: {
    title: 'Title',
    description: 'Limit to 55 characters.',
  },
  navigationBackgroundImage: {
    title: 'Header image',
    description: 'The background image of the header.',
  },
  navigationBackgroundImageGradient: {
    title: 'Use gradient for header image?',
    description: 'Only applies if a header image is selected. Default: No',
    values: [
      { value: 'yes', title: 'Yes' },
      { value: 'no', title: 'No' },
    ],
  },
  navigationHeight: {
    title: 'Header height',
    description: 'Default: Small',
    values: [
      { value: 'small', title: 'Small' },
      { value: 'medium-height', title: 'Medium' },
      { value: 'full-height', title: 'Fullscreen' },
    ],
  },
};

const defaultGeneralProperties = [
  'title',
  'navigationHeight',
  'navigationBackgroundImage',
  'navigationBackgroundImageGradient',
];

const defaultInitialContent = {
  body: [new SectionWidget({})],
  navigationHeight: 'small',
  navigationBackgroundImageGradient: 'no',
};

export {
  defaultGeneralProperties,
  defaultInitialContent,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
};
