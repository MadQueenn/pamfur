import "./App.css";
import background from "./assets/calendarBackground.svg";
import ellipses from "./assets/ellipse.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CloseIcon from '@mui/icons-material/Close';
import TimelineComponent from "./components/CustomTimeline";
import { timelinesData } from "./consts";
import { useState } from "react";

function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="App">
      <h1>Calendar 2018</h1>
      <img className="backgroundImg" alt="calendarlogo" src={background} />
      <div className="message">
        {showCalendar ? (
          <>
            <CloseIcon
              sx={{
                fontSize: "60",
                marginLeft: "auto",
                padding: "5px",
                marginRight: "10px",
                borderRadius: "50%",
                cursor: "pointer",
                color: "#fff",
                background: "#FF6A3D  "
              }}
              onClick={() => setShowCalendar(!showCalendar)}
            />
            <TimelineComponent timelinesData={timelinesData} />
          </>
        ) : (
          <>
            <div>
              Hi Aman,
              <br />
              <br />
              Welcome to your daily event calendar. Be more engaging &
              personalised than ever before. We’ll help you in Tracking Upcoming
              Events, Scheduling Meetings & Creating New Event!
            </div>
            <div className="logoDiv">
              <img className="ellipse" alt="ellipses" src={ellipses} />
              <ArrowRightAltIcon
                sx={{
                  fontSize: "xxx-large",
                  position: "absolute",
                  right: "5px",
                  bottom: "5px",
                  cursor: "pointer",
                  color: "#fff",
                }}
                onClick={() => setShowCalendar(!showCalendar)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
