const Create = () => {
  // This template will be very simple to begin with, Now we will show this component App.js (App Component)
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      {/* lesson27: Underneath the h2 we'll add a form, we'll get rid of the action attribute because we're gonna submit the form in another video, the we first of all want a label for our first field */}
      <form>
        {/* lesson 27: get rid of the htmlFor(prop) attribute in label as well */}
        <label>Blog title:</label>
        {/* lesson 27: Under this we'll have an input field of type text, but we're gonna format this a little bit different, we're gonna put all the different property names or attributes on a new line cause there will be quite a lot of them as we go through this and we don't want them go off the page over to the right, so this is just easier for us to see🧑🏻‍💻, This input field is for title we'll need another for the content and this will be a textarea and get rid of all the attributes and required, we're gonna add more properties in here later on but for now move on and add final label for author, and for this we're gonna use a select field and this is so we can learn how to use controlled inputs with select as well, so at last add a button as well to submit this form. So the form looks terrible and we'll add few styles to make it look better */}
        <input type="text" required />
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="luigi">luigi</option>
        </select>
        <button>Add blog</button>
      </form>
      {/* lesson 27: So now in the form we can fill in the inputs but currently when we do that we're not keeping track of what a user types into them or what a user selects (in the select input). So that's the whole aim of this (keeping track of what a user types into inputs). If we're to start typing for example welcome in the blog title we want to be able to track that value and store it in some state inside this `Create` component, so we can do something with this data later on. So how do we do this? First of all we need to setup some states for this */}
    </div>
  );
};

export default Create;
/* lesson 27: 4:15 in video */
