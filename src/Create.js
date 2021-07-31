import React,{useState} from "react";
const Create = () => {
    const [body, setBody] = useState('')
    return ( 
        <div>
            <form>
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
            </form>
            <button>Add blog</button>
        </div>
     );
}
 
export default Create;