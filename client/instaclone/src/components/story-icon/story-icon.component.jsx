import React from "react";
import { Container, BorderWrapper, Icon } from "./story-icon.styles";

const StoryIcon = () => {
  return (
    <Container>
        <BorderWrapper to="/story">
            <Icon src="https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"/>
        </BorderWrapper>
    </Container>
  );
}

export default StoryIcon;
