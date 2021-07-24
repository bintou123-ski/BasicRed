import React, {useState} from "react"
const BlogList = ({blogs,title,handleDelete})=>{
    const RenderedList = blogs.map(blog=>{
        return(
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>Written by {blog.author}</p>
            <button onClick={()=>handleDelete(blog.id)}>Delete</button>
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