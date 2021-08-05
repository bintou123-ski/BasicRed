import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <Link to="/">
            <p>Go back to the home page</p>
            </Link>
        </div>
     );
}
 
export default NotFound;