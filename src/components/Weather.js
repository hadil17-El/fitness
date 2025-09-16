import React, { useEffect, useState } from "react";
import axios from "axios";
import { WiThermometer, WiStrongWind, WiBarometer } from "react-icons/wi";
import "../styles/Weather.css";

const Weather = ({ darkMode }) => {
   
    const [weather, setWeather] = useState({
        time: "",
        location: "Loading...",
        temperature: "",
        windSpeed: "",
        pressure: "",
    });

    const API_KEY = "ec618f9cfeb181af0410c3322dd8c104"; //  qui la mia API key
    const CITY = "Rome,IT"; // Specifica la città e il paese
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;

    useEffect(() => {
        axios
            .get(API_URL)
            .then((response) => {
                const data = response.data;
                setWeather({
                    time: new Date().toLocaleTimeString(),
                    location: data.name,
                    temperature: `${Math.round(data.main.temp)}°C`,
                    windSpeed: `${data.wind.speed} m/s`,
                    pressure: `${Math.round(data.main.pressure * 0.75006)} mmHg`, // Conversione hPa → mmHg
                });
            })
            .catch((error) =>
                console.error("Errore nel recupero dei dati meteo: ", error)
            );
    }, [CITY]); // Dipendenza aggiunta

    return (
        <div className={`weather-block ${darkMode ? "dark" : ""}`}>
            <p className="time">{weather.time}</p>
            <p className="location">{weather.location}</p>
            <div className="weather-info">
                <WiThermometer size={24} />
                <p className="info">{weather.temperature}</p>
            </div>
            <div className="weather-info">
                <WiStrongWind size={24} />
                <p className="info">{weather.windSpeed}</p>
            </div>
            <div className="weather-info">
                <WiBarometer size={24} />
                <p className="info">{weather.pressure}</p>
            </div>
        </div>
    );
};

export default Weather;
