import BlogList from "./BlogList";
// import useFetch required
import useFetch from "./useFetch";

const Home = () => {
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
