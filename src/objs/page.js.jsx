import textExtractFromWidgetlist from 'utils/text_extract_from_widgetlist';

import {
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
} from './_default_page_attributes';

const BasePage = Scrivito.createObjClass({
  name: 'Page',
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
  },
});

class Page extends BasePage {
  textExtract() {
    return [
      'navigationSection',
      'body',
    ].map(
      attributeName => textExtractFromWidgetlist(this.get(attributeName))
    ).join(' ');
  }
}

Scrivito.registerClass('Page', Page);

Scrivito.provideEditingConfig(Page, {
  title: 'Page',
  description: 'A regular page.',
  attributesConfig: {
    ...defaultPageUiConfigAttributes,
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path()}`,
});

Scrivito.provideComponent(Page, ({ page }) =>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
);

export default Page;
