import { useState } from "react";
import "./styles.css";
export default function App() {
  /* we use class to style elements but inside of react class in a reserved keyword so we need to use className in jsx instead of class attribute in html, In label we are also using htmlFor in place of for attribute */

  /* ------------------------------------------------------------------------------------------
   useState is a hook, it takes a default value ("") in this case. State is required when we need to update something on the screen. setNewItem is a function to update newItem variable state (data), state variable is immutable. changing state re renders the component
  ------------------------------------------------------------------------------------------
   */
  const [newItem, setNewItem] = useState("");
  // creating state to add a brand new todo to our list, by default it will have an empty array (todos = [] at first)
  const [todos, setTodos] = useState([]);
  /*   // re renders every time
  // setNewItem("Infinte Loop!"); */

  function handleSubmit(e) {
    // stops page from refreshing on clicking submit/add button
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    // setNewItem to empty string on submit
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        // check if if it's the one to be toggled
        if (todo.id === id) {
          // doing this like below line can not work properly cause it's mutate the state
          // todo.completed = completed;
          // update completed (creating new state object)
          return { ...todo, completed };
        }
        // otherwise (not matching current id)
        return todo;
      });
    });
  }

  /*  return text hi
    return "Hi React"; */
  return (
    /* Convert what our final version should look like to jsx, we declared(in jsx) how our UI/App should look like, when adding interactivity to our site, instead manually changing our values we will change the jsx, declaring what we want in the UI the entire thing(component) will re render, In order to build modified variables and add interactivity we need to use state(useState) (change data) */
    //fragment <></>
    <>
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
      {/*  Can't return more than one element, fix wrap everything inside a div or
      wrap everything in a fragment(empty tag) */}
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          /* when returning an array of elements inside react make sure each element at the very top has a key property, adding this unique id helps react to change a particular todo and don't bother touching any other elements and does performance optmization */
          return (
            <li key={todo.id}>
              <label>
                {/* pass id and checked value on chanhe event on ckeckbox to toggletod function */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// 28.20 at wds react video
