import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState("true");
  // Creating state to show the error in the browser, to begin with this state will have the initial value of null
  const [error, setError] = useState(null);
  /* lesson 24: We wanna run a cleanup function when the component that uses this hook `useFetch` and this `useEffect` right here unmounts. So how do we create this cleanup function? all we need to do is to place a cleanup function inside useEffect and we just return it that's all we do, we return a value inside useEffect and that value is a function and then when the component that uses this `useEffect` or this `useFetch` hook unmounts it fires that returned cleanup function. So we're gonna do this below setTimeout right here. */
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url)
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          // Setting isPending to false once we have the data, therefore updating the state
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message);
          // set isPending message to false when having an error
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
    /* lesson 24: So we're gonna write return and it's just gonna be a function and all we do for now is log to the console a message so that we know when this has run. So we'll go on the browser and refresh and we're going to go in home page `Home` component, wait for the data and then go to new blog an we can see the cleanup function run but also if we move quickly away we see it run again. So it's at this point we actually want to stop the fetch that's going in the background so that we don't try to update the state. So how do we do that, to do that we're gonna use something known as the abort controller. So let's create this abort controller first then we will get the explanation how to use it. So we'll do that inside useEffect at the top above the setTimeout an we're gonna store this in a constant and we're gonna call it abortCont (we can call it whatever we want) and we set it equal to new AbortController (look up ☝🏻) . So we have this abort controller and what we can do with it is we can assciate it with specific fetch request */
    return () => console.log("cleanup");
  }, [url]);

  return { data, isPending, error };
};
// export it to use it in other components
export default useFetch;
