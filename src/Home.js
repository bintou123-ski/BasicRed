import React,{useState} from "react";
import BlogList from "./BlogList";
const Home = () => {
    const[blogs, setBlogs]=useState([
        {title:'truuiuyt', body:'frtyythj', author:'mario', id:1},
        {title:'truuiuyt', body:'frtyythj', author:'marionnette', id:2},
        {title:'truuiuyt', body:'frtyythj', author:'mario', id:3}
    ])
 const handleDelete = (id)=>{
     const newList = blogs.filter(blog=> blog.id !== id);
     setBlogs(newList)
 }
    return ( 
        <div className="Home">
       <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
     {/*  <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's parts"/>*/}
        </div>
     );
}
 
export default Home;