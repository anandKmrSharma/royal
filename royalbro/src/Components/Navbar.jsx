import { Link } from "react-router-dom"

export const Navbar= () => {
    return (
        <div>
            <Link to="/">HOME</Link>
            <Link to="/contact" style={{margin: "10px"}}>CONTACT</Link>
            <Link to="/about"  style={{margin: "5px"}}>ABOUT</Link>
            <Link to="/users">USERS</Link>

            

        </div>
    )
}