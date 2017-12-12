import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

class YoutubeVideoWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const youtubeVideoId = this.props.widget.get('youtubeVideoId');

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
  }
}

Scrivito.provideComponent('YoutubeVideoWidget', YoutubeVideoWidgetComponent);
