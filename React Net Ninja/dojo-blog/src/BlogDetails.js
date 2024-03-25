import { useParams } from "react-router-dom";

const BlogDetails = () => {
  /* lesson 25: It allows us to grab route parameters from the route, we need to destructure whatever route parameter we want, remember we named the route parameter `id` `:id` so we say we want the `id` (destruture it from object that useParams returns) from the params then we can access this and we can use it inside our template or inside some other function to fetch the blog with that id. So now all we are gonna do to output this in our template */
  const { id } = useParams();
  // lesson 25: we're gonna return a simple template here for now, now we'll create a route for this blog inside App.js (App component) this is where our Routes reside.
  return (
    <div className="blog-details">
      {/* lesson 25 Outputting the id grabbed from route parameter. So this id is visible in our output. so this id is available to us right now and we can use it to do a fetch request for that blog. But first we want to add links to blogs in homepage `Home` component so that if a user clicks on them, it goest to the `BlogDetails` route and it goes to the `id` of whatever this blog is. So let us go now to the `BlogList` component and set this up  */}
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
