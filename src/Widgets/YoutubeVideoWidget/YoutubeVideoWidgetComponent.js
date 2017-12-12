import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('YoutubeVideoWidget', ({ widget }) => {
  const youtubeVideoId = widget.get('youtubeVideoId');

  if (!youtubeVideoId) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Provide a YouTube video ID in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <div className="text-center">
      <iframe
        width="560"
        height="315"
        src={ `https://www.youtube.com/embed/${youtubeVideoId}` }
        frameBorder="0"
        gesture="media"
      />
    </div>
  );
});
