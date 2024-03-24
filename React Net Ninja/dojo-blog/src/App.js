import Navbar from "./Navbar";
import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import create component
import Create from "./Create";

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
            {/* lesson 25: this time path is going to `/blogs/'whatever the id is'`, so how do we say this is gonna be a route parameter a changable part? (parameter that is after `/blogs/'Route parameter'`). We can't hard code this id is it going to be change well to do this we use a colon (:) and we give the route parameter a name (this is similar what we do in express.js) so we can call it whatever we want, we're gonna call it id, so that will represent the `id` of the blog */}
            <Route path="/blogs/:id">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

/* lesson 25: 2:42 in video */
