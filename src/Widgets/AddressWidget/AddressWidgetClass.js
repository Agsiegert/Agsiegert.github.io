import { registerTextExtract } from 'utils/text_extract_registry';

const AddressWidget = Scrivito.provideWidgetClass('AddressWidget', {
  attributes: {
    address: 'html',
    listItems: ['widgetlist', { only: 'AddressListItemWidget' }],
    showLogo: ['enum', { values: ['yes', 'no'] }],
    showBorderBottom: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('AddressWidget', [
  { attribute: 'address', type: 'html' },
  { attribute: 'listItems', type: 'widgetlist' },
]);

export default AddressWidget;
