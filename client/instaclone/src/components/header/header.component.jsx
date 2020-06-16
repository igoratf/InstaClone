import React from "react";

import Logo from '../../assets/logo.png';

import HomeIcon from "@material-ui/icons/Home";
import {
  Container,
  OptionsContainer,
  IconContainer,
  IconWrapper,
  Icon,
  AvatarPic,
  LogoImage
} from "./header.styles";

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import {
  faPaperPlane,
  faCompass
} from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <Container>
      <LogoImage src={Logo} />
      <input type="text" placeholder="Search" />
      <OptionsContainer>
        <IconContainer>
          <IconWrapper>
            <HomeIcon  />
          </IconWrapper>
        </IconContainer>
        <IconContainer>
          <Icon icon={faPaperPlane}  style={{fontSize: '18px'}}/>
        </IconContainer >
        <IconContainer>
          <Icon icon={faCompass} style={{fontSize: '20px'}} />
        </IconContainer>
        <IconContainer style={{paddingRight: '16px'}}>
            <FavoriteBorderIcon />
        </IconContainer>
        <AvatarPic
            aria-label="recipe"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEv7o0R6e3MGA/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=Nb1zRgdreXpwrx8pfd7ta4_0s4KK6aaeMPyXWiSI6U4"
        />
      </OptionsContainer>
    </Container>
  );
};

export default Header;
