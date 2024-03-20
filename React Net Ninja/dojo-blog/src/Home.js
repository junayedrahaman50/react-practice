import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState("true");

  useEffect(() => {
    /* Since it happens too fast we're gonna add 1sec/1000milisec delay to it, so that we can show the loading message. This setTimeout function (the anonymous function inside it) will fire after 1sec then we can perform the fetching operation, so that just makes fetch a little more realistic in terms of the amount of time it takes to get the data. Don't use setTimeout for real-world apps 😅 cause we're just forcing our user to wait another 1 second when they don't need to. This is just to kind of simulate the idea of the request taking little bit of time so it makes it a bit more realistic */
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          // Setting isPending to false once we have the data, therefore updating the state
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {/* only when isPending is true we want to show a loading message. Now to begin with isPending is true it is true as it's initial value set to true so user will see it. This shows it, but we want to show it only when the fetch is going on and We don'twant to show it once we have the data. So once we have the data in 2nd chained .then method available to us we can set isPending to false. See Up ☝🏻. Upon refreshing we can see the loading h2 for split second. To see it better we can use chrome dev tools and set the throttling to mid-tier-mobile. */}
      {isPending && <h2>Loading......</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

/* Conclusion: That's how we can conditionally output a loading message */
export default Home;
