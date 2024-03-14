import "./App.css";
// don't need to provide .js at filename
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  // const title = "Welcome to the new blog!";

  return (
    <div className="App">
      {/* self closing custom components, we can do <Navbar></Navbar> as well */}
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
