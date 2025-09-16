import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import "../styles/UserHealthPanel.css"; // se hai uno stile

const UserHealthPanel = () => {
  const { user } = useContext(UserContext);

  if (!user) return <p>Please log in.</p>;

  return (
    <div className="user-health-panel">
      <div className="user-avatar">
        <img src={user.photo} alt="User" />
        <h3>{user.name}</h3>
        <p className="username">{user.username}</p>
      </div>

      <div className="health-data">
        <div><strong>Age:</strong> {user.age} y.o</div>
        <div><strong>Height:</strong> {user.height} cm</div>
        <div><strong>Weight:</strong> {user.weight} kg</div>
        <div><strong>Blood sugar:</strong> {user.bloodSugar} mmol</div>
        <div><strong>Vitamin D:</strong> {user.vitaminD} nmol</div>
      </div>
    </div>
  );
};

export default UserHealthPanel;
