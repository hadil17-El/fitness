import { useEffect, useState } from "react";
import "../styles/CircleTimer.css"


const CircleTimer = ({ duration = 30 , isPaused = false , workoutId}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = ((duration - timeLeft) / duration) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      
      const timer = setTimeout(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft,isPaused]);
useEffect(() => {
  setTimeLeft(duration); // resetta il timer ogni volta che workoutId cambia
}, [workoutId]);
  return (
    <div className="circle-timer-wrapper">
      <svg width="140" height="140">
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#d4a0ff"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
        <text
          x="70"
          y="75"
          textAnchor="middle"
          fontSize="20"
          fill="#000"
          fontWeight="bold"
        >
          {timeLeft}s
        </text>
      </svg>
    </div>
  );
};

export default CircleTimer;
