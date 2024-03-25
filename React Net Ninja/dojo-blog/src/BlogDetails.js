import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  /* lesson 26: destructure data, error, and isPending state from useFetch hook, we'll use the `id` that we have access to in this component in the template literal. inside here we'll call this data property blog (data:blog). So at some point we're gonna have this data, we might have an error, and we might have true or false for isPending. So we want to conditionally output bit of template dependant on these values, se we'll get rid of the h2 */
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      {/* lesson 26: <h2>Blog Details - {id}</h2> */}
      {/* lesson 26: Display loading message if isPending is true */}
      {isPending && <div>Content is loading.....</div>}
      {/* lesson 26: Output error if there is one */}
      {error && <div>{error}</div>}
      {/* lesson 26: finally we want a bit of template for the blog itself once we have, once we have the blog Details, once we have a value for the blog, so blog that is data in useFetch.js is starts with the value of null, if the fetch in useFetch hook is successful it will return the data (that's truthy value) otherwise upon unsuccessful fetch it will have the starter value of null (falsy value). So this can be displayed using conditional templating. So we're going to return some template in parenthesis */}
      {blog && (
        /* lesson 26: So we're outputting all properties of this blog in this article tag. So if we view this in the browser we can directly go to the url or visit the link from homepage (`Home` component) in both cases it works🔥. Now we will add a bit of css to make it little bit better */
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

/* lesson 26: Conclusion: So we can see now how useful this useFetch hook is cause we're just passing in the endpoint whenever we want to get some data and we're getting these 3 properties back (data (itself), isPending (state that is true or false), error (if there is one) btw all of them are states in useFetch hook so we are returning an object in useFetch hook that makes them properties) every time. So we can reuse this over and over again wahtever the endpoint is in different components. */
export default BlogDetails;
/* Next up we're gonna make forms in create page🔥 */
