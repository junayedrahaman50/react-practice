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
      {/* {} - Dynamic value */}
      <BlogList blogs={blogs} title="All Blogs!" />
    </div>
  );
};
/* Conclusion: That's how we can make a component take in props data and then use that data inside that component. It makes the Bloglist component more reusable and it does, we can now use this BlogList component anywhere in our application whther in home component or in different page component later on */
export default Home;
