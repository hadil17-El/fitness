
import { NavLink } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import "../styles/SideMenu.css";


const SideMenu = ({ darkModeSidebar, onToggleTheme, sidebarOpen }) => {
    return (
        <div
  className={`
    side-menu
    ${darkModeSidebar ? "dark-sidebar" : "light-sidebar"}
    ${sidebarOpen ? "mobile-visible" : "mobile-hidden"}
  `}
>
           <h1>
            <span className="light">
            Sport
            </span>
            <span className={`bold ${darkModeSidebar ? "bold-dark" : "bold-light"}`}>
            land
            </span>
            </h1> 
           <ul className="menu-list">
             <li><NavLink to="/dashboard" className="menu-item" activeClassName="active"> Dashboard </NavLink></li>
             <li><NavLink to="/workout" className="menu-item" activeClassName="active">Workout </NavLink></li>
             <li><NavLink to="/diet" className="menu-item" activeClassName="active">Diet </NavLink></li>
             <li><NavLink to="/profile" className="menu-item" activeClassName="active">Profile </NavLink></li>
           </ul>
         
           <div className="theme-toggle">
        <ToggleSwitch darkMode={darkModeSidebar} onToggle={onToggleTheme} />
      </div>
      </div>
    )
}

export default SideMenu;