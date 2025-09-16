import Weather from "../components/Weather";
import Hydration from "../components/Hydration";
import "../styles/Dashboard.css";
import Activity from "../components/Activity";
import WeeklyResult from "../components/WeeklyResult";
import Schedule from "../components/Schedule";
import UserHealthPanel from "../components/UserHealthPanel"
const Dashboard = ({darkMode }) => {
    return (
        <div className={`container ${darkMode ? "dark-dashboard" : "light-dashboard"}`}>
            <div className="content">
                <h2 className="h2">
                    <span className="s1">
                    Hi
                    </span>
                    <span className="s2">
                    ,Mary!
                    </span>
                   </h2>
               <Weather darkMode={darkMode} />
               <Schedule darkMode={darkMode}  />
               <Hydration darkMode={darkMode} />
               <Activity darkMode={darkMode} />   
                     
               <WeeklyResult darkMode={ darkMode} />     
            </div>
  
        </div>
    )
}
export default Dashboard;