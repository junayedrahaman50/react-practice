/* A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
Creates a new Promise.
 */
let p = new Promise((resolve, reject) => {
  // inside this promise section we need to define what the actual promise is
  let a = 1 + 2; // call resolve method
  /*   let a = 1 + 2; // call reject method */
  if (a === 2) resolve("success!");
  else reject("failed!");
});
// then always runs on resolve
/* It is going to take single parameter as we are passing single parameter to resolve =  ('success'!), .catch will catch any error that is our reject state. then is called if our promise resolves and catch will will be called if the promise is rejected */
p.then((message) => console.log(`This is in the then ${message}`)).catch(
  (message) => console.log(`This is in the catch ${message}`)
);
