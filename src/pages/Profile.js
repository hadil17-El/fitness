/*import { useState, useEffect, useContext } from "react";
import { saveProfileToLocalStorage, loadProfileFromLocalStorage } from "../utils/profileStorage";
*/
import { useContext } from "react";
import "../styles/Profile.css";

import {FaUserEdit} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
const Profile = ({darkMode }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
 if(!user) return <p>Please log in</p>
  return (
    <section className="profile-container ">
     
      <h2 className="profile-title">Profile</h2>
      <div className={`profile-card ${darkMode ? "dark" : ""}`}>
      
        <div className="profile-header">
          <img
            src={user.photo}
            alt="Profile"
            className="profile-avatar"
            />
            <div>
              <h3>{user.name}</h3>
            </div>
        </div>
        <div className="health-data">
        <div><strong>Age:</strong> {user.age} y.o</div>
        <div><strong>Height:</strong> {user.height} cm</div>
        <div><strong>Weight:</strong> {user.weight} kg</div>
        <div><strong>Blood sugar:</strong> {user.bloodSugar} mmol</div>
        <div><strong>Vitamin D:</strong> {user.vitaminD} nmol</div>
      </div>
        <ul className="profile-menu">
          <li onClick={() => navigate("/EditProfile")}>
            <FaUserEdit className="icon" />
            Edit profile
          </li>
        </ul>
        <button className="logout-button">Log out</button>
      </div>
    </section>
  )
}
export default Profile;

