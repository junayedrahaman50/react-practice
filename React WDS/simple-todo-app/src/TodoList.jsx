// import { useState } from "react";
import { TodoItem } from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <ul className="list">
      {/* short circuiting (&&) */}
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        /* when returning an array of elements inside react make sure each element at the very top has a key property, adding this unique id helps react to change a particular todo and don't bother touching any other elements and does performance optmization */
        return (
          <TodoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
