import React from "react";
import { Container, ButtonContainer, ArrowButton } from "./story-container.styles";

import Fab from "@material-ui/core/Fab";
import StoryIcon from "../story-icon/story-icon.component";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const StoryContainer = ({profile}) => {
  return (
    <Container profile={profile ? 'profile' : 'menu'}>
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <ButtonContainer>
        <ArrowButton>
            <ArrowForwardIosIcon style={{fontSize: "12px"}}/>
        </ArrowButton>
      </ButtonContainer>
    </Container>
  );
};


export default StoryContainer;
