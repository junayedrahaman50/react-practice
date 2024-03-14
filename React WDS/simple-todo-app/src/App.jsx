import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
export default function App() {
  /* we use class to style elements but inside of react class in a reserved keyword so we need to use className in jsx instead of class attribute in html, In label we are also using htmlFor in place of for attribute */

  /* ------------------------------------------------------------------------------------------
   useState is a hook, it takes a default value ("") in this case. State is required when we need to update something on the screen. setNewItem is a function to update newItem variable state (data), state variable is immutable. changing state re renders the component
  ------------------------------------------------------------------------------------------
   */

  // creating state to add a brand new todo to our list, by default it will have an empty array (todos = [] at first)
  const [todos, setTodos] = useState([]);
  /*   // re renders every time
  // setNewItem("Infinte Loop!"); */
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
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

  function deleteTodo(id) {
    // get filtered version except the one to be removed
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  /*  return text hi
    return "Hi React"; */
  return (
    /* Convert what our final version should look like to jsx, we declared(in jsx) how our UI/App should look like, when adding interactivity to our site, instead manually changing our values we will change the jsx, declaring what we want in the UI the entire thing(component) will re render, In order to build modified variables and add interactivity we need to use state(useState) (change data) */
    //fragment <></>
    <>
      {/* passing props to custom components, onSubmit here call it whatever you want */}
      <NewTodoForm onSubmit={addTodo} />
      {/*  Can't return more than one element, fix wrap everything inside a div or
      wrap everything in a fragment(empty tag) */}
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} />
    </>
  );
}
