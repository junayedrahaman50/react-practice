import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      {/* pass in filtered data from blogs array, we will take out the blogs which doesn't have a author of mario, pass in title of 'Mario's Blogs' which was 'All Blogs!' previously, filter method fires a callBack function for each item in the array now if we return true for that item it keeps it in the array and if we return false it filters it out of the array and it returns a new array with the items except filtered out ones and we are passing this that data (filtered out array) as a prop, so this BlogList component can be reused and we can reuse it with different data which makes it really useful for doing things like a search page whereby the title matches the search term for example */}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs!"
      />
    </div>
  );
};

export default Home;
