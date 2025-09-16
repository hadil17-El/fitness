import { Area,AreaChart,XAxis,YAxis,Tooltip,Legend,ResponsiveContainer } from "recharts";
import "../styles/Activity.css"
const data = [
  {day: "Mo", thisWeek: 5, lastWeek: 0},
  {day: "Tu", thisWeek: 8, lastWeek: 7},
  {day: "We", thisWeek: 9, lastWeek: 12},
  {day: "Th", thisWeek: 7, lastWeek: 8},
  {day: "Fr", thisWeek: 11, lastWeek: 10},
  {day: "Sa", thisWeek: 0, lastWeek: 15},
  {day: "Su", thisWeek: 15, lastWeek: 5},
]
const Activity = ({ darkMode }) => {
      return (
        <div className={`Activity-block ${darkMode ? "dark" : ""}`}>
          <h3>Activity</h3>
          <ResponsiveContainer width="102%" height={250}>
            <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorThisWeek" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6c63ff" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#6c63ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLastWeek" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d5e37e" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#d5e37e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="thisWeek"
                stroke="#6c63ff"
                fill="url(#colorThisWeek)"
                strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="lastWeek"
                  stroke="#d5e37e"
                  fill="url(#colorLastWeek)"
                  strokeWidth={2}
                  />
            </AreaChart>
          </ResponsiveContainer>
         
        </div>
      )
}
export default Activity;


