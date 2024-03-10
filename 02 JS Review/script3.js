// Asynchronus JS Promises
/* fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("Junayed"); */

// Async await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos); // Pending promise need to wrapped in async await

console.log("Junayed");
