import { useNavigate, useParams } from "react-router-dom"
import { workouts } from "../pages/workouts";
import "../styles/WorkoutDetail.css";
import {ArrowLeft} from "lucide-react";
import { useState , useRef, useEffect } from "react";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CircleTimer from "../components/CircleTimer";
const WorkoutDetail = () => {
  
    const { id } = useParams();
   
    const navigate = useNavigate();

    const workoutIndex = workouts.findIndex(w => w.id === id);

    const workout= workouts[workoutIndex];


    const videoRef = useRef(null);
    const [paused,setPaused] = useState(false);
   
    if (!workout) return <p>Workout not found</p>

    const goToWorkout = (index) => {
        if(index >= 0 && index < workouts.length) {
            navigate (`/workoutDetail/${workouts[index].id}`);
        }
    };
    const togglePause = () => {
      

        if(!videoRef.current) return;

        if(paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
      
        setPaused(!paused);
    };
    return(
       <>
        <button
            onClick={() => navigate("/Workout")}
            className="workout-freccia">
                <ArrowLeft size={24} />
            </button>
        <div className="workout-detail">
         
            <video
                ref={videoRef}
                src={workout.video}
                autoPlay
                loop
                muted
                />
            <h2 className="workout-title">{workout.title}</h2>

            <CircleTimer duration={30} isPaused={paused} workoutId={workout.id} />
            <h3> Benefits</h3>
            <p className="mt-2">{workout.description}</p>
            
            <div className="controls">
             <button className="prec" onClick={() => goToWorkout(workoutIndex - 1)}>
             <FaChevronLeft />
                </button>
        <button className="pause-button" onClick={togglePause}>
        {paused ? <FaPlay /> : <FaPause />}
        </button>
        <button  className="succ" onClick={() => goToWorkout(workoutIndex + 1)}>
        <FaChevronRight />
        </button>
      </div>
        </div>
        </> 
    )
}
export default WorkoutDetail;