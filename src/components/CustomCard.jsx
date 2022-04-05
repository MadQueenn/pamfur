import React from "react";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography"
import "./Card.css";

const CustomCard = ({ eventTitle, eventData, colorPalet }) => {
  console.log(eventTitle)
  return (
    <div>
      <Card className={`card-component ${colorPalet}`}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {eventTitle}
          </Typography>

          <Typography variant="body2"> {eventData}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default CustomCard;
