import React, { useState } from 'react';
import "../styles/EditProfile.css";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
const EditProfile = ( {darkMode}) => {
  const [formData, setFormData] = useState({
    fullName: 'Alena Cooper',
    username: '@alenammi',
    phone: '0123 456 789',
    height: 165,
    weight: 65,
    age: 18
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const navigate = useNavigate();
  return (
    <div className='edit-container'>
    <button
        onClick={() =>navigate("/Profile")}
        className='freccia absolute top-5 left-5 p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
          <ArrowLeft size={24} />
        </button>
    <div className={`Edit-profile-container ${darkMode ? "dark" : ""}`}>
      <div className="Edit-profile-header">

          <img
            className="profile-img"
            src="../images/hadil.jpg"
            alt="profile"
          />
          
        <p className="Edit-profile-username">{formData.username}</p>
      </div>

      <form className="mt-6 space-y-4">
        <div  style={{ display: 'flex', flexDirection: 'column' , gap: '7px'}}>
          <label className="full-name">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div  style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <label className="phone-number">Phone number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        
          <div  style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <label className="height">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div  style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <label className="wieght">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div  style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <label className='age'>Age</label>
            <input
              type='number'
              name='age'
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              />
          </div>
      

        <button
          type="submit"
          className="Edit-profile-btn"
        >
          Save Changes
        </button>
      </form>
    </div>
    </div>
  );
};

export default EditProfile;


