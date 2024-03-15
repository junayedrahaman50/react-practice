// const BlogList = (props) => {
const BlogList = ({ blogs, title }) => {
  /* stroring blog property of props object in blogs, we are passing in properties to props object and grabbing this different properties from this props object and storing these in this variables now an easier way to do this is destructuring ('{blogs, title}') as we want blogs and title from props object */
  //   const blogs = props.blogs;
  //   const title = props.title;
  //   const { blogs, title } = props;
  //   console.log(props, blogs);
  return (
    /*  In the BlogList componet we are trying to map through the blogs data but this component has no idea of what blogs is. The blogs data is not defined in this component. We can't just use any data in another where it's defined (Home component in this case) right here in home component because it can't reach that. There is 2 ways to fix this: 1st option is to redeclare all this data into BlogList component instead of home (data - '  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);' the 2nd option is to use props whereby we pass this data from this home component into the BlogList here the 2nd option props will be used for 3 reasons 1st: It's gonna make our BlogList component more reusable and we'll see exactly how later on. 2nd: It allows us to still use this data in home component later on (cause we are not removing it) if we need it in future cause the data is still gonna be declared here in home component. 3rd: It allows to learn how to use props 😁. Props are a way to pass data from one component( a parent component ) into a child component. In this case Home is parent component and BlogList is child component,  we will be passing the blogs data into the BlogList component to do that we will make a property name on <BlogList/> tag. We can call it whatever we want it's blogs in this case. So,  <BlogList blogs={blogs} /> now this is being passed into BlogList component ( check home component code ) as a prop ( blogs={blogs} - this is a prop ). We need to recieve it here in BlogList component we get access to an argument inside this function/component called props. Now this blogs property will be in props object. Any props that we send through (like blogs={blogs}) into a component will be attached to this props object which we automatically get as an argument in the component ( 'cosnt BlogList = (props)=>{}' ) and we can access them like props.blogs. We can pass in multiple props if we want to like we can pass in title="All Blogs" with a string value */
    <div className="blog-list">
      <h2>{title}</h2>
      {/* {props.blogs.map((blog) => ( */}
      {blogs.map((blog) => (
        // what we want to output for each blog
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
