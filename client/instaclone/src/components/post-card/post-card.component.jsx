import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { FormContainer, OptionsIcon, CommentTextArea } from './post-card.styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    textAlign: "left",
  },
  media: {
    height: 0,
    minHeight: "350px",
    // paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const PostCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);

  };

  return (
    <Card style={{ width: "500px", margin: '20px 0' }}>
      <CardHeader
        className={classes.root}
        avatar={
          <Avatar
            aria-label="recipe"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEv7o0R6e3MGA/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=Nb1zRgdreXpwrx8pfd7ta4_0s4KK6aaeMPyXWiSI6U4"
          >
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <OptionsIcon />
          </IconButton>
        }
        title="Ada Meira"
        subheader="June 12, 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"
        title="Photo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Meu namorado é muito lindo
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton aria-label="share">
          <SendOutlinedIcon />
        </IconButton>
        <IconButton aria-label="bookmark" style={{marginLeft: 'auto'}}>
          <BookmarkBorderIcon/>
        </IconButton>
      </CardActions>
      <CardActions>
        <FormContainer>
          <CommentTextArea rows="1" placeholder="Add a comment..."></CommentTextArea>
          <Button href="#text-buttons" color="primary">
        Post
      </Button>
        </FormContainer>
        
      </CardActions>
    </Card>
  );
};

export default PostCard;
