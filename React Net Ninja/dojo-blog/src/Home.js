import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState("true");
  // Creating state to show the error in the browser, to begin with this state will ahve the initial value of null
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogss")
        .then((res) => {
          /* Read 2nd: take the response object `res` and check the `ok` property on the response object and in fact before we do that we are going to comment the if block and log the response object (res). Now check the logged response object where we get `ok` property. The value of this `ok` property will be true if everything is fine and we get the data back. If we don't get the data back for example if we send a request to an endpoint that is faulty or that doesn't exist then value of `ok` property will be false, so what we want to do is check is the response okay or rather is it not okay because if this `ok` property is false the we want to throw an error. So we'll uncomment the if block and we will check not if the response is okay but if it's not okay (!false = true, condition will be true and the if block will execute) now at this point in this if block we want to throw an error, cause it means there is an error coming back from the server so we'll throw it right here like this (this is how we throw an error): throw Error('Our own error message'). So when we throw an error in this fetch it catches it in the catch block/method. So if it's not ok it throws the error and we catch that error with the message attached to it. So we should see that message in `console.log(err.message)`. Now at the moment it's not gonna fire that message because that response is okay (ok property is true) but if we change our endpoint to something that doesn't exist like add another `s` see the fetch argument ☝🏻. So the endpoint will become faulty it's going to make request to the server and the server will send an error back so ` if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }` block will be fired and then we will throw our own error and we'll catch this error in catch block. So it shows in the console `Could not fetch the data for that resource`. So now we're catching the errors what we would like to do to store the error in some kind of state so that we could output it to the browser   */
          // console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          // Setting isPending to false once we have the data, therefore updating the state
          setIsPending(false);
        })
        .catch((err) => {
          /* Read 1st: This catch block catches any kind of network error, and it will fire a function (that anonymous function with err (we can name this parameter anything we want) parameter). We'll log this error to console. So this will catch any kind of network error, so that's if we can't even connect to server, now we can simulate this kind of error if we open the terminal and terminate (ctrl+c) the json-server. Now we shouldn't be able to connect to the server cause it's not running, and we should catch the error in catch block an will log that to the console. That is a connection error but what if there is another type of error for example imagine our request reaches the server but the server sends an error back maybe if the endpoint that we've tried to fetch from doesn't exist or if the request is denied, in that case this catch block over here doesn't automatically catch those errors when we use the fetch api cause it's still reaching the server and the server is still sending a response(res in this case) object back to us it's just that the response doesn't contain the data and it will contain a different status now in this case we need to check that response object when we get it back, in the first then block we're going to do a if check look up ☝🏻 */
          /* Read 3rd: So When we catch the error over here instead of logging it to the console, what we can do to setError to update the state by passing in the error message (err.message property) so whatever message is in the error that could be the error message we are throwing `Could not fetch the data for that resource` or the network error message that we get when we are not able to connect to server, that we saw terminating the json server */

          // console.log(err.message);

          // set isPending message to false when having an error
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {/* Now we can output this error message in our template, if we have a value for error state (data), again using conditional templating or conditional rendering by using && operator short circuiting. So we have only have a value for error this output will be visible. Otherwise it will have the initial falsy value of `null`. So if we run it the browser we can see it working, however we still se the Loading...... message cause isPending state is true as we not updating it as we haven't got the data back because of the error (look the 2nd chained then method). We don't want to see that Loading...... if we have an error because it's not actually still loading so what we could do is if we get an error we also want to set this state (isPending) to be false so it doesn't show that loading message. So we are gonna do that as well. */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading......</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;

// in video at 7:02
