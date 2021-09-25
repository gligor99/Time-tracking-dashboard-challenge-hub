import { Box } from "@mui/system";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import profileImg from "../../assets/img/image-jeremy.png";

function ProfileCard() {
  return (
    <Card sx={{ minWidth: 14 }}>
      <Box>
          <CardMedia
            component="img"
            height="194"
            image={profileImg}
            alt="Paella dish"
          ></CardMedia>
        </Box>
      <CardContent>
        <Typography>Report for</Typography>
        <Typography>Jeremy Robertson</Typography>
        
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default ProfileCard;
