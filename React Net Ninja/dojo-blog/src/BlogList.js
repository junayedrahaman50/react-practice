/* Removing the handleDelete function that was passed as prop from home component to BlogList component, also the button that is used to invoke it */

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete blog!</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
