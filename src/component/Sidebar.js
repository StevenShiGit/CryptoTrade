import {Link} from "react-router-dom";

function Sidebar(){
    return(
        <div className="sidebar">
            <Link to="/"> Home </Link>
            <br /> 
            <Link to="/News"> News </Link>
            <br />
            <Link to="/Crypto"> Crypto</Link>
            
        </div>  
    );
}

export default Sidebar;