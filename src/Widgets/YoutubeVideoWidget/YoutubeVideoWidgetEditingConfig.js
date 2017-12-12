import videoWidgetIcon from 'assets/images/video_widget.svg';

Scrivito.provideEditingConfig('YoutubeVideoWidget', {
  title: 'YouTube Video',
  thumbnail: `/${videoWidgetIcon}`,
  attributes: {
    youtubeVideoId: {
      title: 'YouTube video ID',
      description: 'Every video at YouTube has a unique identifier that consists of a series'
        + ' of digits and letters. In the video URL, the ID usually is the value of the'
        + ' "v" parameter, e.g. KPa6VnwfHDY in youtube.com/watch?v=KPa6VnwfHDY&feature=youtu.be.',
    },
  },
  properties: [
    'youtubeVideoId',
  ],
});
