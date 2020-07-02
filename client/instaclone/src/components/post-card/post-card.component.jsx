import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Comment from '../comment/comment.component';

import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { FormContainer, OptionsIcon, CommentTextArea, PostButton, CommentsContainer } from './post-card.styles';

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

const comments = [
  {
    id: 1,
    author: 'teste',
    content: 'Testando comentário'
  },
  {
    id: 2,
    author: 'teste',
    content: 'Testando comentário'
  },
  {
    id: 3,
    author: 'teste',
    content: 'Testando comentário'
  }
];

const lastId = 4;

const PostCard = () => {
  const [text, setText] = useState('');
  const [commentList, setCommentList] = useState(comments);
  const [liked, setLiked] = useState(false);
  const classes = useStyles();

  const likePost = () => {
    setLiked(!liked);
  }

  useEffect(() => {

  }, [text])


  const onChangeText = (event) => {
    setText(event.target.value);
  }

  const postComment = () => {
    let comment = {
      id: lastId,
      author: 'teste',
      content: text
    }

    setCommentList([...commentList, comment]);
    setText('');
  }

  return (
    <Card style={{ width: "500px", margin: '20px 0' }} variant="outlined">
      <CardHeader
        className={classes.root}
        avatar={
          <Avatar
            aria-label="recipe"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEv7o0R6e3MGA/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=Nb1zRgdreXpwrx8pfd7ta4_0s4KK6aaeMPyXWiSI6U4"
          />
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={likePost}>
          {liked ? <FavoriteIcon style={{color: 'red'}}/> : <FavoriteBorderIcon />}
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
      <CardContent>
        <CommentsContainer>
          {commentList.map((comment, index) => <Comment {...comment} key={index}/>)}
        </CommentsContainer>
      </CardContent>
      <Divider light />
      <CardActions>
        <FormContainer>
          <CommentTextArea rows="1" placeholder="Add a comment..." value={text} onChange={(event) => onChangeText(event)}></CommentTextArea>
          <PostButton disabled={!text} onClick={postComment}>
        Post
      </PostButton>
        </FormContainer>
      </CardActions>
    </Card>
  );
};

export default PostCard;
