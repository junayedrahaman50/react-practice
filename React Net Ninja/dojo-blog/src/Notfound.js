import { Link } from "react-router-dom";

/* lesson 32: we'll create a stateless functional component sfc.  This will have a div with class `not-found`. It is going to have an `h2`,`p` tag, and a Link to send the user back to the homepage. To import the Link component write link by starting with `<` sign. So this is out `Notfound` component all we wanna do now is set it up so anyone tries to go to the route that doesn't exist we show that component and the way to do that is by going to App component and adding in kind of a catch all route(again it's like express.js) for this. So we need to this down here at the bottom in App.js file that is `App` component.*/
const Notfound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page can not be found.</p>
      <Link to="/">Go back to the homepage...</Link>
    </div>
  );
};

export default Notfound;
