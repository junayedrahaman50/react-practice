const BlogList = ({ blogs, title, handleDelete }) => {
  /* function to delete blog using id: here we want to delete the blog with that id from blog data, now the data is initialize in home component useState (this is where the satate is), we don't want to directly edit the blogs prop (blogs prop - that is passed in in this component from Home component) (we shouldn't do that) instead we need to use setBlogs method inside Home componet to the update the state (change the state after deleting an item (blog)) that's what we need to do, it's not good to defined handleDelete function in here (in BlogList component) instead we want it to be defined in the home component, so we can interact with the data directly and then we can pass in this data (returned data from handleDelete function, the data after deleting) through as prop, so we can create a prop called handleDelete in Home component and set it equal to handleDelete function e.g. handleDelete={handleDelete} and the in BlogList we can accept this fumction as a prop in BlogList component and we are using it in the onClick event see below ⬇️, So we are invoking this function which is defined in the parent home component and inside home component we can use setBlogs function to update the state and we can remove the blog with this id (check handleDelte function in Home component) */

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* button with click event handler (onClick), invoke an anonymous function while clicking it (Note: We pass in function expression (body of function or function name)), we'll pass in the id of the blog we want to delete so that we can find it in the array and delete it, we have access to the blog and the id property is in the blog, so we are passing that (blog.id) into handleDelete function so we know in here which blog to delete, this click event invokes the handleDelete function defined in Home component */}
          <button onClick={() => handleDelete(blog.id)}>Delete blog!</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
