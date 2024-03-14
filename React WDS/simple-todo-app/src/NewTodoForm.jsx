import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
// Destructure this : NewTodoForm(props)
export function NewTodoForm({ onSubmit }) {
  //   const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    // stops page from refreshing on clicking submit/add button
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    // setNewItem to empty string on submit
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" className="new-item">
          New Item
        </label>
        {/* update our input when it changes, value of our input = newItem variable value, which is empty string ("") default value of useState in this case, for example check by puting "Default" in useState it will be updated, onChange is fired everytime we click a key in React. It takes event object(e) and gets the value of input on getting event(everytime we click a key) and setting that as value of newItem  */}
        <input
          value={newItem}
          /* if we comment below line we can't fill this input as the input value is of newItem variable which is (""), so it's saying whenever I change my input(onChange) get the new value of my input(e.target.value) set that as newItem and rerun my component with updated value, setNewItem function will be called whenever the input data changes the entire component will re render with updated value, if our input value is set to some specific value it will always have that value until we change it, to update that value we need change the state variable by calling setNewItem function. changing state variable rerenders entire component. Updating state variable(newItem) will be updated everywhere it is used in our component(App) */
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

// PropTypes validation
NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Validate onSubmit prop as a function and required
};
