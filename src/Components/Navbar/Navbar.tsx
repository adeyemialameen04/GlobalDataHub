import { useContext } from "react";
import "./navbar.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);

  return (
    <nav className="nav">
      <div className="container nav__container">
        <div className="logo">Global Data Hub</div>
        <button onClick={handleThemeToggle} className="mode-btn center-btn">
          {theme === "light" ? (
            <FiMoon className="mode-icon" />
          ) : (
            <FiSun className="mode-icon" />
          )}
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
