import { useState, useEffect } from "react";
import BlogList from "./BlogList";
// import useFetch required
import useFetch from "./useFetch";

const Home = () => {
  /* destructure the three properties we get back returned from useFetch function, we couuld have returned array in useFetch and destructure it here, but returning object is beneficial cause then order of these properties doesn't matter as long as the destructured variable names and property names are same***, and we can just grab isPending without getting other returned properties if that's what we want. Now the initial value to this hook we need to pass in the endpoint as argument to useFetch(url) parameter. So that's the resource we're trying to fetch  */
  /* data: blogs - this means grab the `data` but call it blogs in this context, so now when we pass blogs in we're just passing in data `blogs = data`. Let's save and see this if it works 🤞🏻 */
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading......</div>}
      {/* Changing the blogs state to data */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};
// *** Need to verify it in browser console

/* So that's how we can make a custom hook */
export default Home;
