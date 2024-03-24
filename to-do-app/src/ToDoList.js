import { useState, useEffect } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever tasks change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event) => {
    if (event?.key === "Enter" || event === null) {
      if (newTask.trim()) {
        setTasks((prevTasks) => [...prevTasks, newTask.trim()]);
        setNewTask("");
      }
    }
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={handleAddTask}
        placeholder="Enter a new task"
      />
      <button onClick={() => handleAddTask(null)}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
