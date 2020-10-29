import React, { useState, useEffect } from "react";
import {
  Container,
  ButtonContainer,
  ArrowButton,
  SliderContainer,
  ContainerWrapper,
} from "./story-container.styles";

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
    return () => {
      
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
    <ContainerWrapper>
      <Container profile={profile ? "profile" : "menu"} id="storyContainer">
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
    </Container>
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
    </ContainerWrapper>
    
  );
};

export default StoryContainer;
