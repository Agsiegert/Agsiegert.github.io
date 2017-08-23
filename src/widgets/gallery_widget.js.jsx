import ThumbnailGallery from 'widgets/gallery_widget/thumbnail_gallery';

const GalleryWidget = Scrivito.createWidgetClass({
  name: 'GalleryWidget',
  attributes: {
    images: ['widgetlist', { only: 'GalleryImageWidget' }],
  },
});

Scrivito.provideUiConfig(GalleryWidget, {
  title: 'Gallery',
  description: 'A widget with an image gallery.',
  attributes: {
    images: {
      title: 'Images',
      description: 'The list of images',
    },
  },
});

Scrivito.provideComponent(GalleryWidget, ({ widget }) => {
  return <ThumbnailGallery widget={ widget } />;
});

export default GalleryWidget;
