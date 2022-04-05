import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography"
import CustomCard from "./CustomCard";

const CustomTimeline = ({ timelinesData }) => {

  console.log(timelinesData)
  const timeLines = () => {
    return timelinesData.map(
      ({ eventTime, eventSpan, eventTitle, eventData, colorPalet }, index) => {
        const cardProps = {
          eventTitle,
          eventData,
          colorPalet
        };
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ m: "auto 0", color: "black", p: "0", width: "115px" }}>
              <Typography variant="h7" component="span">
                {eventTime}
              </Typography>
              <Typography>{eventSpan}</Typography>
            </TimelineOppositeContent>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <CustomCard {...cardProps} />
            </TimelineContent>
          </TimelineItem>
        );
      }
    );
  };
  return <Timeline>{timeLines()}</Timeline>;
};

export default CustomTimeline;
