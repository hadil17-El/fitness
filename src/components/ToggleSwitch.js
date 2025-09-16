import React from "react";
import "../styles/ToggleSwitch.css"; // Importa lo stile corretto

const ToggleSwitch = ({ darkMode, onToggle }) => {
  return (
    <div className="toggle-container">
     
      <span>{darkMode ? "Dark mode" : "Light mode"}</span>
      
      <label className="switch">
        
        <input type="checkbox" checked={darkMode} onChange={onToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
