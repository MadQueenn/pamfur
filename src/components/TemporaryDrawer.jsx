import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import ellipses from "../assets/ellipse.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TimelineComponent from "./CustomTimeline";
import SimpleSlider from "./SimpleSlider";
import { timelinesData } from "../consts";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
  }));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Puller />
      <SimpleSlider/>
      <TimelineComponent timelinesData={timelinesData} />
    </Box>
  );

  return (
    <div className="messageContainer">
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="message">
            <Puller />

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
                onClick={toggleDrawer(anchor, true)}
              />
            </div>
          </div>

          {/* <Button>
            {" "}
            <Puller onClick={toggleDrawer(anchor, true)} />
          </Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: { width: "98.5%", margin: "0 auto", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
