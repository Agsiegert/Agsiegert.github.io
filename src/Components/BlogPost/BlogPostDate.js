import formatDate from 'utils/formatDate';

function BlogPostDate({ post }) {
  const date = post.get('publishedAt');

  if (!date) { return null; }

  return (
    <time className="timeline-badge" dateTime={ date.toISOString() }>
      { formatDate(date, 'MM/DD') }
    </time>
  );
}

export default Scrivito.connect(BlogPostDate);
