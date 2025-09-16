import "../styles/Hydration.css";
const Hydration = ({ darkMode }) => {
    const hydrationData = [
        { day: "Mo", amount: 1900},
        { day: "Tu", amount: 2200 },
        { day: "We", amount: 1950 },
        { day: "Th", amount: 1803 },
        { day: "Fr", amount: 1675 },
        { day: "Sa", amount: 1741 },
        { day: "Su", amount: 869 },

    ];

    return (
        <div className={`hydration-block ${darkMode ? "dark" : ""}`}>
            <h3 className="hydration-title">Hydration</h3>
            {hydrationData.map((item) => (
                <div key={item.day} className="hydration-row">
                    <span className="day">{item.day}</span>
                    <div className="hydration-bar">
                        <div
                            className="fill"
                            style={{ width: `${(item.amount / 2200) * 100}%`}}></div>
                    </div>
                    <span className="amount">{item.amount} 
                        </span>
                        <span className="unit">

                        ml</span>
                </div>
            ))}
        </div>
    )
}
export default Hydration;