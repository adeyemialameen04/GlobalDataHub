import "./navbar.css"
import {FiSun,FiMoon} from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="container nav__container">
            <div className="logo">
                Global Data Hub
            </div>
            <button className="mode-btn center-btn">
                <FiMoon className="mode-icon"/>
                Dark Mode
            </button>
        </div>
    </nav>
  )
}

export default Navbar