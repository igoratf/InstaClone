import React from "react";

import Logo from "../../assets/logo-inst.png";

import HomeIcon from "@material-ui/icons/Home";
import {
  Container,
  OptionsContainer,
  IconContainer,
  IconWrapper,
  Icon,
  AvatarPic,
  LogoImage,
  LogoContainer,
} from "./header.styles";

import SearchBox from '../search-box/search-box.component';

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { faPaperPlane, faCompass } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoImage src={Logo} />
      </LogoContainer>
      <SearchBox />
      <OptionsContainer>
        <IconContainer>
          <IconWrapper>
            <HomeIcon />
          </IconWrapper>
        </IconContainer>
        <IconContainer>
          <IconWrapper>
          <Icon icon={faPaperPlane} style={{ fontSize: "20px" }} />
          </IconWrapper>
        </IconContainer>
        <IconContainer>
          <IconWrapper>
          <Icon icon={faCompass} style={{ fontSize: "20px" }} />
          </IconWrapper>
        </IconContainer>
        <IconContainer style={{ paddingLeft: "8px", paddingRight: "16px" }}>
          <IconWrapper>
            <FavoriteBorderIcon />
          </IconWrapper>
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
