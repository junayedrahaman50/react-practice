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

  const handleDelete = (id) => {
    /* store the new array temporarily in newBlogs, the filter method doesn't change the original (blogs) array it doesn't mutate (change) it, It returns a new filtered array, blog id that doesn't match this passed id will remain in the array id that is not matched is removed, the new array is stored in newBlogs */
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    /* we will use setBlogs to set new value (filtered array of objects/blogs (newBlogs)) for blogs, see the defined array of objects up 👆🏻 in the useState that is previous (initial) value and we will upadate the state by setting the value of blogs to newBlogs, fingers crossed 🤞🏻, upon refreshing the modified newBlogs state will not persist the state will set back to initial state as it re rendering, re-runnig the code, that's how we are passing functions (handleDelete) into other components (BlogList) as props form parent component(Home) */
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      {/* we can pass in this data (returned data from handleDelete function, the
      data after deleting) through as prop, so we can create a prop called
      handleDelete in Home component and set it equal to handleDelete function
      e.g. handleDelete={handleDelete} */}
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

/* conclusion: handleDelete function is defined where the original initial data is in the home component we will not be modifying blogs prop instead we will pass this handleDelete function as prop to BlogList component and use it in there in the onclick method by invoking it with the id of the blog to be deleted this handleDelete function defined in Home component since then invoked and uses setBlogs(newBlogs) to change value of blogs to newBlogs filtered array upon refreshing the code re runs and the state(data) of blogs is set back to initial value */

export default Home;
