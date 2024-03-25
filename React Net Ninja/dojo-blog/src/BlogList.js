/* Removing the handleDelete function that was passed as prop from home component to BlogList component, also the button that is used to invoke it */

import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      {/* lesson 25: Remember inside this function we've access to each individual blog and each blog has an `id` property so we can access that an we can create a link. So we're gonna create a `Link` (auto imort it) tag in here, an we're gonna surround `h2` and `p` tag inside the `Link`. Now in the `to` prop we don't want to hardcode the url cause part of it is going to be dynamic (the id is changable for each blog). So we are going to use string literals (template string) to output the id variable inside curly braces (curly braces denotes we're using some kind of js). Now in this map function we have access to each `blog` and we'll use the `blog.id` that's the id property in the `blog` in here. (This similar functionality is used in ejs and express.js as well). So we're capturing the if in the links and we're accessing these ids inside the `BlogDetails` component by destructuring the `useParams` hook  */}
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete blog!</button> */}
        </div>
      ))}
    </div>
  );
};
/* lesson 25: We're getting the the blogs prop from the `Home` component we're iterating through the blogs using map function and outputting each blog and building link for each blog with their specific id that we've access to. */

export default BlogList;
