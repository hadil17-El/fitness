
import "../styles/Workout.css";
import { workouts } from "../pages/workouts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const  Workout = () => {
    const navigate = useNavigate();
    const [selectedCategory,setSelectedCategory] = useState("Full body");
   const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const categories = ["Full body","Legs","Arms","Chest","Abs"];
  
const filteredWorkouts = workouts.filter(
    (w) =>
      (searchTerm === "" ? w.category === selectedCategory : true) &&
      (w.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.category.toLowerCase().includes(searchTerm.toLowerCase()))
);
        const user= {
            name: "Hadil",
            gender:"female"
        };
        const greeting =
        user.gender === "male"
            ? "Hello, handsome"
            : user.gender === "female"
            ?"Hello, pretty"
            : "Hello"

    const [selectedMood, setSelectedMood] = useState(null);
    const moods= [
        {name: "Awesome", image:"/images/Awsome.png"},
        {name:"Motivated", image:"/images/motivated.png"},
        {name:"Relaxed",image:"/images/relaxed.png"},
        {name:"Tired",image:"/images/tired.png"}
    ];
    return (
        <div className="workout-container">
            {/*Header*/}
         <div className="header">
            <div className="profile">
                {greeting} 
            </div>

           <div className="search-icon" onClick={() => setShowSearch(!showSearch)}>
          <img src="/images/ricerca.png" alt="ricerca " />
        </div>
             <div className={`search-panel ${showSearch ? "open" : ""}`}>
                  <button className="close-btn" onClick={() => setShowSearch(false)}>✕</button>
            <input
                type="text"
                placeholder="Search workout..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
         </div>
            {/*Mood selector*/}
            <div className="mood-selector">
                <p>How are you feeling today?</p>
                <div className="mood-icons">
                    {moods.map((mood) => (
                        <span
                            key={mood.name}
                            className={`mood-item ${
              selectedMood === mood.name ? "selected" : ""
            }`}
            onClick={() => setSelectedMood(mood.name)}
            >
                <img src={mood.image} alt={mood.name} />
                {mood.name}
            </span>
                    ))}
               
                </div>
            </div>
            </div>
            {/*Categories*/}
            <div className="category-container">
            <div className="categories">
                { categories.map((cat)=> (
                    <button
                        key={cat}
                        className={selectedCategory === cat ? "active" : ""}
                        onClick={()=> setSelectedCategory(cat)}>
                            {cat}
                        </button>
                ))}
            </div>
            <div className="workout-cards">
                {filteredWorkouts.map((workout) => (
                    <div key={workout.id} className="card">
                        <div className="workout-info">
                            <h3>{workout.category}</h3>
                            <h2>{workout.title}</h2>
                            <button className="start-button" onClick={()=> {navigate(`/WorkoutDetail/${workout.id}`)}}>Start</button>
                    </div>
                    </div>
                ))}
            </div>
            </div>

        
                  </div>

    )
}
export default Workout;