import React, { useState, useEffect } from "react";
import "../styles/Diet.css";
import { useNavigate } from "react-router-dom";


const Diet = ({darkMode}) => {
    const [dietData, setDietData] = useState({});
    const [selectedDay, setSelectedDay] = useState(null);
    const [filter, setFilter]= useState("All");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        //Usa fetch per caricare un file dietData.json (simula una chiamata API).
        fetch("/data/dietData.json")
            .then((res) => res.json())
     
            .then((data) => {
                setDietData(data);//Salva tutti i dati nel tuo stato dietData (dove li potrai usare per mostrarli o filtrarli).
                const firstDay= Object.keys(data)[0];//estrae le chiavi dell’oggetto → cioè i nomi dei giorni: ["Lunedì", "Martedì", "Mercoledì", ...].[0] prende il primo giorno disponibile.Questo serve a mostrare automaticamente il piano del primo giorno appena i dati sono pronti.
                
                setSelectedDay(firstDay);
                setLoading(false);//Disattiva lo stato di caricamento.Fa scomparire il messaggio "Caricamento dati..." e mostra i dati veri.
            })
            .catch((err) => {
                console.error("Errore nel caricamento dei dati:",err);
                setLoading(false);
            });

    },[]);

    if (loading) return <div>Caricamento dati...</div>;//Mostra caricamento
   
    if (!dietData[selectedDay]) return <div>Giorno non trovato</div>;

    const dayPlan = dietData[selectedDay];
    const filteredDays =
        filter === "All"
            ? Object.entries(dietData)
            : Object.entries(dietData).filter(([_, value]) => value.type === filter);
           
 
    return (
        <div className="diet-page">
            <h1 className="piano-title">Piano Alimentare</h1>
            <div className="filter-bar">
                <label>Filtra per tipo:</label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                   <option value="All">Tutti</option> 
                   <option value="Healthy">Sano</option> 
                   <option value="Hiegh Protein">Alta Proteina</option> 
                </select>
            </div>
            <div className="day-selector">
                {
                    filteredDays.map(([day]) => (
                        <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={day === selectedDay ? "active-day" : "" }>
                            {day}
                        </button>   
                    ))}
            </div>
            <div className="meal-list">
                <h2>{selectedDay}</h2>
                {dayPlan.meals.map((meal,index) => (
                    
                    <div className={`meal-card ${darkMode ? "dark" : ""}`} key={index} onClick={() => navigate(`/meal/${meal.id}`)}>
                        <h3 className="meal-time">{meal.time}</h3>
                        <p className="meal-name" >{meal.name}</p>
                        <img src={meal.image} className="meal-img" alt={meal.name} />

                        <span className="meal-calories">{meal.calories} kcal</span>
                        </div>
                ))}
                <div className="total">
                    <span>
                      Totale:{" "}
                      {dayPlan.meals.reduce((sum,meal) => sum + meal.calories, 0)} kcal
                      </span>
                  </div>
            </div>

        </div>
    )
};
export default Diet;
