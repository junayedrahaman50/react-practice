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

  return { data, isPending, error };
};
// export it to use it in other components
export default useFetch;
