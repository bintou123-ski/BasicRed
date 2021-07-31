import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({blogs,title})=>{
    const RenderedList = blogs.map(blog=>{
        return(
        <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <p>Written by {blog.author}</p>
              </Link>
          
           {/* <button onClick={()=>handleDelete(blog.id)}>Delete</button> */} 
        </div>
        )
    })

    return(
        <div className="blog-list">
                <h2>{title}</h2>
                {RenderedList}
        </div>
    )
}
 
export default BlogList;