export function TodoItem(completed, id, title) {
  return (
    <li>
      <label>
        {/* pass id and checked value on chanhe event on ckeckbox to toggletod function */}
        <input
          type="checkbox"
          checked={completed}
          //   onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      {/* call deleteTodo function with todo.id, mistake: () => deleteTodo(todo.id) this is passing function ✅, this is passing the result of calling(returned value) deleteTodo(todo.id) function ❌ */}
      <button
        //   onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
