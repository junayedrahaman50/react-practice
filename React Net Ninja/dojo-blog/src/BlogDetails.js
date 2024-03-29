import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  const handleClick = () => {
    /* lesson 30 (read last): So for deleting http://localhost:8000/blogs/${id} is going to be our endpoint and we have access to the id variable in this `BlogDetails` function/component that is from the returned object of useParams hook that we destructured into id, and we have access to `blog.id` as well that we're getting from the useFetch hook in here, see the useFetch destructuring above☝🏻, so that's the endpoint now we need our second argument in the fetch that is the object where we can say the method this time is going to be DELETE and that's all we need to do in there, we're not sending any data all we're doing is asking json server to delete this blog with this `id` `blog.id` in this case, both are same though. Now we'll chain a then method to this fetch cause it's asynchronus which is going to fire a function when the fetch is complete and inside here what we'd like to do is again redirect the user to the homepage `Home` component once the blog is deleted, cause once the user clicked the button to delete the blog it makes no sense to stay in the `BlogDetails` page, we wanna take them back to the homepage, So let's do that by first of all using the useHistory hook in the `then` block, when the fetch is complete we'll redirect the user to the homepage using push('/') method to push on a new route in history object see below. `/` is the homepage route that renders the `Home` component. So all this should work, check in the browser. So all works, now we're gonna add some styles for the delete button in our global(the styles apply to all components) index.css file  */
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Content is loading.....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          {/* lesson 31 (read first): We'll place the delete button here, and we need to attach a click handler(onClick) to this, and we set it equal to something, now we need to create a function that we can associate with this button we'll call this `handleClick` and we'll assocaite that to our onClick event, So handleClick is going to be fired when we click on this button. So inside this button in `handleClick` function we wanna make a fetch request which is gonna be a delete request  */}
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

/* lesson 31 (Conclusion): That is pretty much it, we've completed the blog there is one more thing to do that is to setup a 404 page if we go to somekind of url that doesn't exist in our routes and we'll do that next up */
export default BlogDetails;
