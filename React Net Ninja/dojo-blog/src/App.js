import Navbar from "./Navbar";
import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import create component
import Create from "./Create";
import BlogDetails from "./BlogDetails";

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
            {/* lesson 25: this time path is going to `/blogs/'whatever the id is'`, so how do we say this is gonna be a route parameter a changable part? (parameter that is after `/blogs/'Route parameter'`). We can't hard code this id is it going to be change well to do this we use a colon (:) and we give the route parameter a name (this is similar what we do in express.js) so we can call it whatever we want, we're gonna call it id, so that will represent the `id` of the blog. Now it could be 100 or 124 anything doesn't matter. Now when a user visits this route we want to we want to go to the `BlogDetails` component. Now if we test this we should see that route component `BlogDetails` regrdless of what id we put in e.g. `123` in the :id part of the path it works like a variable (like express.js). example url: `http://localhost:3000/blogs/123`. This id can be whatever we want it is changable renders the `BlogDetails` component. But we need to access whatever our id `:id` is inside `BlogDetails` component because if it's 1 then we want to fetch the blog with id of 1 inside this component, if it's 5 we fetch the blog with id of 5 and so forth. So how do we grab that route parameter right here in the url `http://localhost:3000/blogs/4` (grab 4 inside BlogDetails component) well we use a hook from `react-router-dom` */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
