// Destructure useState hook from react library, this grabs us the function from the react library, now we can use it in our component
import { useState } from "react";

const Home = () => {
  // let name = "Mario";
  // Make a reactive value using useState, we give this useState a initial value for example (Mario), we want to store this in some variable. We use array destructuring to grab 2 values that this hook returns to us, first value is the initial value (name), 2nd value is a function that we can use to change that value most times it's called set[whatever the name of value to be changed]
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(23);
  const handleClick = () => {
    /* changing the state data using setName, this useState value is reactive if we change it it's gonna change in the template as well, when we use this function to change the value that triggers react to re-render the component upon re-rendering it has the new value of name cause it's been updated. We can use this hook (useState) as many times in our component for different values other than name like it can be array, object, boolean etc. like 'const [age, setAge] = useState(0)' The data type of state we are using doesn't matter */
    setName("Luigi");
    // upadte age to 30
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      {/* At first it will give us the initial value (Mario), to change this value we can use the setName function */}
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

/* Conclusion: When we need a reactive value something that might change at some point we use the useState hook to do that we pass in an initial value and we can output that value in the template and then we just call the set function 2nd value we get in the destructured array to update it and that triggers re-render and the new vslue is going to be output to the browser in this template, so this hook is very useful 😄 */

export default Home;
