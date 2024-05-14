import { Link } from "react-router-dom";

const Navigation = () =>{
    return(
        <>
            <Link to="/"> Home </Link> ||  
            <Link to="/about"> About </Link> ||
            <Link to="/products"> Products </Link> ||
            <Link to="/contact"> Contact </Link> || 
            <Link to="/members"> Members </Link>
        </>
    );
}

export default Navigation;