import React, { useState, useEffect } from "react";
import {
  Container,
  ButtonContainer,
  ArrowButton,
  SliderContainer,
} from "./story-container.styles";

import Fab from "@material-ui/core/Fab";
import StoryIcon from "../story-icon/story-icon.component";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const styles = {
  buttonIcon: {
    fontSize: 12,
  },
};

const StoryContainer = ({ profile }) => {
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    console.log(scrollLeft);
    return () => {
      // cleanup
    };
  }, [scrollLeft]);

  const scrollFoward = () => {
    const slider = document.getElementById("storyContainer");
    slider.scrollLeft = 200;
    setScrollLeft(200);
  };

  const scrollBack = () => {
    const slider = document.getElementById("storyContainer");
    slider.scrollLeft = 0;
    setScrollLeft(0);
  };

  return (
    <Container profile={profile ? "profile" : "menu"} id="storyContainer">
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <SliderContainer>
        <ButtonContainer>
          <ArrowButton
            onClick={() => scrollBack()}
            style={{ visibility: scrollLeft ? "visible" : "hidden" }}
          >
            <ArrowBackIosIcon style={styles.buttonIcon} />
          </ArrowButton>
        </ButtonContainer>

        <ButtonContainer>
          <ArrowButton 
          onClick={() => scrollFoward()}
          style={{ visibility: scrollLeft === 0 ? "visible" : "hidden" }}>
            <ArrowForwardIosIcon style={styles.buttonIcon} />
          </ArrowButton>
        </ButtonContainer>
      </SliderContainer>
    </Container>
  );
};

export default StoryContainer;
