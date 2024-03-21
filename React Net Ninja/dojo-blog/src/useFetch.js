/* custom hooks in react needs to start with the word use otherwise it won't work, Now grab the whole useEffect thing in here now paste it inside the hook/function (useFetch - this function called a hook cause it starts with the word use). Now we need to do some tweaks first of all we need to import the useEffect hook and we also need to register all of the states as well because currently the state is in home component, but we're not setting the state in home component anymore we're setting them here in useFetch. So we're grabing all the states and bringing them here from home component. We'll also import useState and useEffect in order to use them. We'll export this function/hook (Componet functions starts with capital letter this function is a hook not an component) to use it in other components and we'll call the blogs state data cause we want to make this reusable so in the future if we're using this hook fetch data it might be to fetch a different type of resource for example tags or categories so it makes no sense to call it blogs all the time. So change state name to data in the function to update this state to setData. Notice the parameter inside the first chained then method is also called data but it will not affect us cause it's local version inside this function (the anonymous function). So it doesn't matter if the names clash. Last thing to do is to return some values from useFetch function. So we know hooks(useState, useEffect) return some values, we can do the same thing in our custom hooks, so at the bottom useFetch function we're gonna return some values  */
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState("true");
  // Creating state to show the error in the browser, to begin with this state will have the initial value of null
  const [error, setError] = useState(null);

  useEffect(() => {
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
          console.log(data);
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
  }, [url]);

  /* return an object and place 3 values inside this object, the return value can be whatever we like it could be an array like useState(useState returns an array we destructure that array) or it could be a string or boolean in our case it's an object with three properties they are data,isPending, and error cause when we use this useFetch hook inside another file/component in future we'll be able to grab this properties from the hook that's what we want to get. One more thing we want to do is to pass in the api endpoint (url) into the function rather than hardcode it in `fetch("http://localhost:8000/blogs")` cause if we're using this useFetch hook in another file or in different component at some point it might not always be to the same endpoint (url). So we'll use a parameter of url in useFetch function and inside fetch as well `fetch(url)`. Now we need to pass an argument to this useFetch url parameter whenever we want to call it, that also means that we're gonna place url as dependency to the useEffect dependency array `[url]` and that means whenever the url changes it's going to rerun this function to get the data for that endpoint. (assuming we're going to create state variable of url and setUrl function to update it in other component - Not sure about this 😐). Now we're going to import this useFetch function in our Home component and then use it */
  return { data, isPending, error };
};
// export it to use it in other components
export default useFetch;
