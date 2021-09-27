import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";

const CoffeCard = props => {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: "10px" }} />
      <CardContent>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">READ MORE</Button>
        
      </CardActions>
    </Card>
  );
};

export default CoffeCard;