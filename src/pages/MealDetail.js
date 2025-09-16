import { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import "../styles/MealDetail.css";
import {ArrowLeft} from "lucide-react";
function MealDetail () {
const  { mealId} = useParams();// estrae l'id dalla URL
const [meal, setMeal] = useState(null);
const navigate = useNavigate();
const [activeTab, setActiveTab] = useState("ingredients");// Aggiungi uno stato per tracciare la tab selezionata
useEffect(() => {
    fetch("/data/dietData.json")
    .then(res => res.json())
    .then(data => {
        const found = Object.values(data).flatMap(day => day.meals).find(m => m.id === mealId);
        setMeal(found);
    });
}, [mealId]);
if(!meal) return <div>LOADING ... </div>
return (
    <div className="Meal-container">
     <button
            onClick={() =>navigate("/diet")}
            className="freccia absolute top-5 left-5 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                <ArrowLeft size={24} />
            </button>
    <div className="meal-detail">
       
        <img src={meal.image} alt={meal.name} className="meal-img" />
        <h2>{meal.name}</h2>
        <p><strong>Daily</strong></p>
        <h3>Nutrition Value Per Serving</h3>
        <div className="nutrition-chart">
            <div className="circle">
                <span>{meal.calories} Kcal</span>
            </div>
            <ul>
                <li><span className="dot protein"></span>Protein: {meal.protein}g</li>
                <li><span className="dot fats"></span>Fats: {meal.fats}g</li>
                <li><span className="dot carbs"></span>Carbs: {meal.carbs}g</li>
            </ul>
        </div>
        <div className="tabs">
            
            <button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</button>
            <button className={activeTab === "nutrition" ? "active" : ""} onClick={() => setActiveTab("nutrition")}>Nutritional Info</button>
        </div>
      
        {activeTab === "ingredients" &&(
        <ul className="ingredients">
           
                 {
            meal.ingredients.map((ing, idx)=> (
                <li key={idx}>{ing}</li>
            ))}
        </ul>
        )}
         {activeTab === "nutrition" &&(
            <div  className="nutrition-info">
        <ul>
            <li>Protein: {meal.protein}g</li>
      <li>Fats: {meal.fats}g</li>
      <li>Carbs: {meal.carbs}g</li>
      <li>Calories: {meal.calories} Kcal</li>
        </ul>
        </div>
        )}

        <button className="add-btn">+ Add to My Meal</button>
    </div>
</div>
)
}
export default MealDetail;