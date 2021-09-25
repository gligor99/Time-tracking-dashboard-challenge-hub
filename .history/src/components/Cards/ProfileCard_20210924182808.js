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
      <CardContent width={300}>
        <Box display="flex" flexDirection="row">
          <Box
            width={250}
            height={250}
            alignItems="center"
          >
            <CardMedia
              component="img"
              height="194"
              image={profileImg}
              alt="Paella dish"
            ></CardMedia>
          </Box>
          <Typography>Report for</Typography>
          <Typography>Jeremy Robertson</Typography>
        </Box>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default ProfileCard;
