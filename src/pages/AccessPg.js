import { useContext, useEffect, useState } from "react";
import "../styles/AccessPg.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { UserContext } from "../context/UserProvider";
import userData from "../UserData.json";
const AccessPg = () =>{

    const navigate = useNavigate();
   const [showLogin, setShowLogin] = useState(false);  
   const [showSign,setShowSign]= useState(false);  
   const {setUser }= useContext(UserContext);
  const [usernameInput, setUsernameInput] = useState(userData.user.email);
const [passwordInput, setPasswordInput] = useState(userData.user.password);

const [signupName, setSignupName] = useState('');
const [signupEmail, setSignupEmail] = useState('');
const [signupPassword, setSignupPassword] = useState('');
const handleSignup = () => {
  if (!signupName || !signupEmail || !signupPassword) {
    alert("Compila tutti i campi");
    return;
  }

  if (!signupEmail.includes("@")) {
    alert("Inserisci una email valida");
    return;
  }

  const newUser = {
    name: signupName,
    email: signupEmail,
    password: signupPassword,
    age: null,
    height: null,
    weight: null,
    bloodSugar: null,
    vitaminD: null
  };

  setUser(newUser); 
  navigate("/dashboard"); 
};

const handleLogin = () => {
  if (usernameInput === userData.user.email && passwordInput === userData.user.password) {
    setUser(userData.user);
    navigate("/dashboard");
  } else {
    alert("Credenziali errate");
  }
}
   return (
        <div className="h-screen">
            <h1 className="title">Fitness</h1>
            <p className="quot">
            "The pain you feel today will be the strength you feel tomorrow."
            </p>
            {
                showLogin ? (
                    <div className="login-container">
                 
            <button onClick={() => setShowLogin(false)}  className=" freccia absolute top-5 left-5 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
               <ArrowLeft size={24} /> 
            </button>
                        <h2 className="login-title">Login</h2>
                        <input 
  type="text" 
  placeholder="Username" 
  value={usernameInput} 
  onChange={e => setUsernameInput(e.target.value)} 
  className="name-field" 
/>
<input 
  type="password" 
  placeholder="Password" 
  value={passwordInput} 
  onChange={e => setPasswordInput(e.target.value)} 
  className="pwd-field" 
/>

                        <button className="login-btn" onClick={handleLogin}>
                            Log In
                        </button>
                        </div>
                ): showSign ? (
                   <div className="signup-container">
  <button
    onClick={() => setShowSign(false)}
    className="freccia absolute top-5 left-5 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
  >
    <ArrowLeft size={24} />
  </button>

  <h2 className="signup-title">Sign Up</h2>

  <input
    type="text"
    placeholder="Full Name"
    className="name-field"
    value={signupName}
    onChange={(e) => setSignupName(e.target.value)}
  />

  <input
    type="email"
    placeholder="Email"
    className="email-field"
    value={signupEmail}
    onChange={(e) => setSignupEmail(e.target.value)}
  />

  <input
    type="password"
    placeholder="Password"
    className="pwd-field"
    value={signupPassword}
    onChange={(e) => setSignupPassword(e.target.value)}
  />

  <button className="signup-btn" onClick={handleSignup}>
    Sign Up
  </button>

  <p className="sign-p">
    Already have an account?{" "}
    <span className="sign-span" onClick={() => {
      setShowSign(false);
      setShowLogin(true);
    }}>Log In</span>
  </p>

  <button className="sign-google" disabled>
    Sign up with Google
  </button>
</div>

                ): (
                    //Se showLogin è false ,mostra i bottoni normali
                    <div className="buttons">
                        <button className="sign-up" onClick={() => setShowSign(true)}>
                            Sign Up
                        </button>
                        <button className="log-in" onClick={() => setShowLogin(true)} // Mostra il form di login
                         >
                            Log In
                        </button>
                    </div>
                )}
           


        </div>
    )
}
export default AccessPg;