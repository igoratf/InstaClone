import React from "react";

import Logo from '../../assets/logo.png';

import HomeIcon from "@material-ui/icons/Home";
import {
  Container,
  OptionsContainer,
  IconContainer,
  IconWrapper,
  Icon,
  Avatar,
} from "./header.styles";

import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import {
  faPaperPlane,
  faCompass,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { LogoImage } from './header.styles';

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
        <IconContainer>
            <IconWrapper>
                <FavoriteBorderIcon />
            </IconWrapper>
        </IconContainer>
        {/* <IconContainer>
          <Icon icon={faHeart} size="lg" />
        </IconContainer> */}
        <Avatar />
      </OptionsContainer>
    </Container>
  );
};

export default Header;
