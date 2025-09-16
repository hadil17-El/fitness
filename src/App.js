import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; //In React Router, BrowserRouter è un tipo specifico di Router.Qui, stai rinominando BrowserRouter come Router, ma sono la stessa cosa.
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";
import Diet from "./pages/Diet";
import Profile from "./pages/Profile";
import SideMenu from "./components/SideMenu";
import "./App.css"; // Importa i tuoi stili
import WorkoutDetail from "./pages/WorkoutDetail";
import MealDetail from "./pages/MealDetail";
import EditProfile from "./pages/EditProfile";
import AccessPg from "./pages/AccessPg";

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
const [darkModeSidebar, setDarkModeSidebar] = useState(false); 
// Funzione per cambiare tema
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setDarkModeSidebar(!darkModeSidebar);
  }
  // Rende visibile SideMenu solo quando non siamo sulla pagina di accesso
 const location = useLocation(); // useLocation() qui è sicuro, all'interno del Router
 const isAccessPage = location.pathname === "/"; // Verifica se siamo sulla pagina di accesso
const [sidebarOpen, setSidebarOpen] = useState(false);

const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};

  return (
    <>

    <div className={`transition-opacity duration-500 ${darkMode ? "dark-mode" : "light-mode"} ${isAccessPage ? "access-page-body":""}`}>
        <div className="main-layout">
        
        {!isAccessPage && 
              (<>
             <SideMenu
  onToggleTheme={toggleTheme}
  darkModeSidebar={darkModeSidebar}
  sidebarOpen={sidebarOpen}
/>

            
                </>
              )}
{!isAccessPage && (
   <button
        className=" hamburger-btn md:hidden  p-2 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
)}

            
          <div className="content">
          <Routes>

          <Route path="/" element={<AccessPg />} />
              <Route path="/dashboard" element={<Dashboard darkMode={darkMode} />} />
              <Route path="/workout" element={<Workout darkMode={darkMode} />} />
              <Route path="/diet" element={<Diet  darkMode={darkMode}/>} />
              <Route path="/EditProfile" element={<EditProfile darkMode={darkMode} />} />
               <Route path="/profile" element={<Profile darkMode={darkMode} />} />
              <Route path="/data/workouts/:id" element={<WorkoutDetail  darkMode={darkMode} /> } />
              <Route path="/meal/:mealId" element={<MealDetail  darkMode={darkMode}/>} />
              <Route path="/WorkoutDetail/:id" element={<WorkoutDetail darkMode={darkMode} />} />
              </Routes>
             
              </div>
            
        </div>
</div>
       

    </>
  );
}
function App() {
  return(
    <Router>
      <AppContent/>
    </Router>
  )
}
export default App;
