import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  /* lesson 29: fixed an error made by net ninja, he passed true as "true" which was a truthy string value which make this error undetected fixed in below line */
  const [isPending, setIsPending] = useState(true);
  // Creating state to show the error in the browser, to begin with this state will have the initial value of null
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      //lesson 24 Abort controller argument
      fetch(url, { signal: abortCont.signal })
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
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // set isPending message to false when having an error
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
