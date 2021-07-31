
import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    //in this data the name is blog
   const{data:blogs,loading,error}=useFetch('http://localhost:8000/blogs')
    
 {/*const handleDelete = (id)=>{
     const newList = blogs.filter(blog=> blog.id !== id);
     setBlog(newList)
 }
*/}


    return ( 
        <div className="Home">
          { error && <div>{error} </div>}
        {loading && <div>Loading.....</div>}
       {blogs  && <BlogList blogs={blogs} title="All Blogs" />}
     {/*  <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's parts"/>*/}
        </div>
     );
}
 
export default Home;