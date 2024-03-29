import { useState } from "react";
/* lesson 30 (read first): import useHistory from react router package */
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  /* lesson 30 (read second): Next we need to invoke this `useHistory` hook, that's all we need to do, now e've this object which represents history and on that object we can use several methods we can use to either go back through history, go forward through history so that's like clicking the back and forward arrows in the browser, but also redirect the user, so first of all what we'll do is maybe show how to go back through history, so we'll say history and use a method called go (in the `handleSubmit` function). */
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      console.log("new blog added!");
      /* lesson 30 (read third): Now we can pass in a (-) number in here if we want to go backward several steps through like `history.go(-1)` this means we go back one through history and we want to place this inside `then` block right here that executes when fetch post operation is finished. So after we added the blog we then want to go back one, so for example. if we go to homepage `Home` and we go to a details page `BlogDetails` the we to new blog page `Create` now if were to add this and submit the form, once the blog is added it should go back one which was to that blog details page `BlogDetails`. So we can cj=heck it in the browser. If we want to go forwards we can change the argument of go method in history to one but in this case that makes no sense, instead we want to do is to redirect the user back to the homepage, now the way we do that by taking the history object and using a push method instead and then all we need to do is place the route url inside, and that is `/` route for the homepage that renders `Home` component. */
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="luigi">luigi</option>
        </select>
        {/* lesson 29 (read fourth): So we're gonna surround this button in curly braces and we're gonna say !isPending. So this is only gonna output when `isPending` is false. When isPending is false the negation will make it true the button will show in the browser  */}
        {/* {!isPending && <button>Add blog</button>} */}
        {/* lesson 29 (read fifth): So if isPending is true we're gonna output the disabled button, and we're gonan say Adding blog... in it */}
        {/* {isPending && <button disabled>Adding blog...</button>} */}
        {/* lesson 29 (read sixth): Alternatively, we can use a ternary operator. condition ? trueExpression (if condition true) : falseExpression (if condition false) */}
        {isPending ? (
          <button disabled>Adding blog...</button>
        ) : (
          <button>Add blog</button>
        )}
      </form>
    </div>
  );
};

/* lesson 30 (Conclusion): So that's all we want to do. The user submits the form, the blog is added, once it's added in the `then` menthod we push them to the homepage. So let's test this. Next up we're going to delete blogs */

export default Create;
