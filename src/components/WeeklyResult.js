
import { Bar,BarChart ,XAxis,YAxis,Tooltip,CartesianGrid } from "recharts";
import React from "react";
import "../styles/WeeklyResult.css";
const WeeklyResult = ({ darkMode }) => {
    const weeklyData = [
        {day: "Mo", eaten: 1800, burned: 1200},
        {day: "Tu", eaten: 2200, burned: 1500},
        {day: "We", eaten: 2000, burned: 1300},
        {day: "Th", eaten: 1700, burned: 1600},
        {day: "Fr", eaten: 2500, burned: 1000},
        {day: "Sa", eaten: 2300, burned: 1400},
        {day: "Su", eaten: 2100, burned: 1300},
    ];

    return (
        <div className={`weekly-result-block ${darkMode ? "dark" : ""}`}>
            <h3 className="week-title">Weekly Result</h3>
            <BarChart width={300} height={200} data={weeklyData} barSize={25}>
            <defs>
        {/* Gradiente per "Eaten" */}
        <linearGradient id="colorEaten" x1="0" y1="1" x2="0" y2="0">
            <stop offset="5%" stopColor="#6c63ff" stopOpacity={1}/>
            <stop offset="95%" stopColor="#b1a7ff" stopOpacity={1}/>
        </linearGradient>

        {/* Gradiente per "Burned" */}
        <linearGradient id="colorBurned" x1="0" y1="1" x2="0" y2="0">
        <stop offset="5%" stopColor="#d4fc79" stopOpacity={1}/>
            <stop offset="95%" stopColor="#96e6a1" stopOpacity={1}/>
        
           </linearGradient>
    </defs>
                <XAxis dataKey="day" tickLine={false} axisLine={false} /> {/*axisLine={false} → Rimuove la linea dell'asse, tickLine={false} → Nasconde le tacche sugli assi*/}
                <YAxis  tickLine={false} axisLine={false} />
                <Tooltip />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Bar dataKey="eaten" fill= "url(#colorEaten)" />
                <Bar dataKey="burned" fill="url(#colorBurned)" />
            </BarChart>
        </div>

    )
}
export default WeeklyResult;

