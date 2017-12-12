import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

class YoutubeVideoWidgetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elementWidth: 0,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const elementWidth = this.outerDiv.offsetWidth;

    if (this.state.elementWidth !== elementWidth) {
      this.setState({ elementWidth });
    }
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
      <div
        ref={ e => { this.outerDiv = e; } }
        className="text-center"
      >
        <iframe
          width={ this.state.elementWidth }
          height={ this.state.elementWidth / (16 / 9) }
          src={ `https://www.youtube.com/embed/${youtubeVideoId}` }
          frameBorder="0"
          gesture="media"
        />
      </div>
    );
  }
}

Scrivito.provideComponent('YoutubeVideoWidget', YoutubeVideoWidgetComponent);
