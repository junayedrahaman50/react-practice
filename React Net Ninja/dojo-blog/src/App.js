import Navbar from "./Navbar";
import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import create component
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Notfound from "./Notfound";

function App() {
  // const title = "Welcome to the new blog!";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* lesson 32: the Notfound component will be rendered here in a catch all route, so we're gonna add another route. Again start writing `Notfound` from `<` sign as it will help autoimport it in the top and now we want the path in this route to be asterix `*`, that means look catch any other route, now this goes at the bottom because otherwise it's gonna match that comes in if it goes at the top. If it goes at the bottom if none of the routes defined above it match then this `*` one matches regardless it's kind of like a catch-all route. So if we save it now, upon entering route in the address bar that doesn't exist in the browser we'll see the `Notfound` component being rendered. So with this this project is pretty much complete now. */}
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
/* lesson 32(Conclusion): To further advance in react we can check out the react docs or advanced react tutorials. learn useRef, useMemo, useReducer, and useCallback hook. Also edit functionality in this blog can be implemented by making a fetch request (send the id as prop from `BlogDetails` component to some `Edit` component and implement the fetch function PUT request there this solution is an experiment) */

export default App;
