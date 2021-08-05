import React,{useState} from "react";

const Create = () => {
 const [body, setBody] = useState('')
 const[loading, setLoading]=useState(false)


  const handleSubmit=(e)=>{
      e.preventDefault();
      const blog ={body};

      setLoading(true)
      fetch('http://localhost:8000/blogs',{
          method:'POST',
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(blog)
      }).then(()=>{
          console.log('new blog added')
        
      })
  }
    
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
            </form>
           {!loading && <button>Add blog</button>} 
           {loading && <button disabled>Adding blog....</button>} 
        </div>
     );
}
 
export default Create;