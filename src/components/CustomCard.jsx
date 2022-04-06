import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Card.css";

const CustomCard = ({ eventTitle, eventData, eventTime, colorPalet, customStyle, zoom }) => {
  return (
    <div>
      <Card className={`card-component ${colorPalet} ${customStyle}`}>
        <CardContent>
          <Typography color="textPrimary"> {eventData}</Typography>

          <Typography color="textSecondary" gutterBottom>
            {eventTitle}
          </Typography>
          <Typography color="textPrimary"> {zoom || eventTime}</Typography>

        </CardContent>
      </Card>
    </div>
  );
};
export default CustomCard;
