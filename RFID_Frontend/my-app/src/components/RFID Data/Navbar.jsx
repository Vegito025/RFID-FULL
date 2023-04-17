import "./data.css"
import {Link} from "react-router-dom"

function Navbar(){
    return (
        <div className="navbar-react">
            <div className="navbars-react" id="nav-ul-react">
            <nav>
            <h2>RFID Portal</h2>
            <ul className="nav-ul-react">
                <li><Link to="/analytics" className="a show">Analytics</Link></li>
                <li><Link to="/register" className="a show">Create User</Link></li>
                <li><Link to="/" className="a show">Logout</Link></li>
            </ul>
            </nav>
        </div>
        </div>
    )
}

export default Navbar;