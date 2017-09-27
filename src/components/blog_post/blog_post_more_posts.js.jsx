import BlogPostPreviewList from 'components/blog_post/blog_post_preview_list';

function BlogPostMorePosts({ author }) {
  if (!author) { return null; }
  if (author.objClass() !== 'Author') { return null; }

  return (
    <section className="bg-white">
      <div className="container gutter0">
        <h1 className="h2 border-bottom">More great blog posts from { author.get('name') }</h1>
        <BlogPostPreviewList author={ author } />
      </div>
    </section>
  );
}

export default Scrivito.connect(BlogPostMorePosts);
