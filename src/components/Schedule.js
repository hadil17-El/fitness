import {SwiperSlide,Swiper} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "../styles/Schedule.css";
import "swiper/css/grid";

const scheduleData = [
    {type:"Workout",time:"10:00",day: "Mo",location: "Gym" },
    {type:"Stretching",time:"10:00",day: "Th",location: "Home" },
    {type:"Running",time:"10:00",day: "We",location: "cdm Respect" },
    {type:"Workout",time:"10:00",day: "Tu",location: "Via Campi" },
    {type:"Stretching",time:"10:00",day: "Fr",location: "cdm Respect" },
    {type:"Running",time:"10:00",day: "Sa",location: "cdm Respect" },
    {type:"Rest",time:"10:00",day: "Su",location: "Home" },

]
const firstGroup = scheduleData.slice(0,4);//primi 4 giorni
const secondGroup = scheduleData.slice(4);//ultimi 3 giorni
const Schedule = ( { darkMode }) => {
return (
<div className={`schedule-container ${darkMode ? "dark" : ""}`}>
    <h2 className="schedule-title">Schedule</h2>
    <Swiper
        slidesPerView={1}
        pagination={{ clickable: false, dynamicBullets: true  }}
       
        spaceBetween={10}
        autoplay={{ delay: 300, disableOnInteraction: false}}
        >
            
                <SwiperSlide>
                    <div className="schedule-card">
                {firstGroup.map((item,index) => (
                    <div key={index} className="activity-card">
                    <p className="activity">
                        <strong>
                            {item.type}
                        </strong>
                        <span className="time">
                            {item.time}
                        </span>
                    </p>
                    <p className="detailes">{item.day} / {item.location}</p>
                </div>
                ))}
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="schedule-card">
                        {
                            secondGroup.map((item, index) => (
                                <div key={index} className="activity-card">
                                    <p className="activity">
                                        <strong>
                                            {item.type}
                                        </strong>
                                        <span className="time">{item.time}</span>
                                    </p>
                                    <p className="details">{item.day} / {item.location}</p>
                           </div>
                            ))
                        }
                    </div>
                </SwiperSlide>
                    
        </Swiper>
    </div>
)
}
export default Schedule ;

