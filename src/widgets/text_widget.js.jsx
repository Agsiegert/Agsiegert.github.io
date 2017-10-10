import textExtractFromHtml from 'utils/text_extract_from_html';
import { registerTextExtract } from 'utils/text_extract_registry';

const BaseTextWidget = Scrivito.createWidgetClass({
  name: 'TextWidget',
  attributes: {
    text: 'html',
    alignment: ['enum', { validValues: ['left', 'center', 'right'] }],
  },
});

class TextWidget extends BaseTextWidget {
  textExtract() {
    return textExtractFromHtml(this.get('text'));
  }
}

Scrivito.registerClass('TextWidget', TextWidget);

registerTextExtract('TextWidget', [
  { attribute: 'text', type: 'html' },
]);

Scrivito.provideEditingConfig(TextWidget, {
  title: 'Text',
  description: 'A widget with html text.',
  attributesConfig: {
    alignment: {
      title: 'Alignment',
      description: 'How should this text be aligned? Default: left',
    },
    text: {
      title: 'Text',
      description: 'The actual source code of this text',
    },
  },
});

Scrivito.provideComponent(TextWidget, ({ widget }) => {
  const classNames = [];
  if (widget.get('alignment')) {
    classNames.push(`text-${widget.get('alignment')}`);
  }

  return (
    <Scrivito.ContentTag
      tag="div"
      className={ classNames.join(' ') }
      content={ widget }
      attribute="text"
    />
  );
});

export default TextWidget;
