import React from "react";

import Logo from "../../assets/logo-inst.png";

import { Link } from 'react-router-dom';

import HomeIcon from "@material-ui/icons/Home";
import {
  Container,
  OptionsContainer,
  LinkContainer,
  IconWrapper,
  Icon,
  AvatarPic,
  LogoImage,
  LogoContainer,
  NotificationsIcon
} from "./header.styles";

import SearchBox from '../search-box/search-box.component';

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { faPaperPlane, faCompass } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <Container>
      <LogoContainer to="/">
        <LogoImage src={Logo} />
      </LogoContainer>
      <SearchBox />
      <OptionsContainer>
        <LinkContainer to="/">
          <IconWrapper>
            <HomeIcon style={{fontSize: "28px"}}/>
          </IconWrapper>
        </LinkContainer>
        <LinkContainer>
          <IconWrapper>
          <Icon icon={faPaperPlane} style={{ fontSize: "20px" }} />
          </IconWrapper>
        </LinkContainer>
        <LinkContainer>
          <IconWrapper>
          <Icon icon={faCompass} style={{ fontSize: "22px" }} />
          </IconWrapper>
        </LinkContainer>
        <NotificationsIcon style={{ paddingLeft: "8px", paddingRight: "16px" }}>
          <IconWrapper>
            <FavoriteBorderIcon style={{fontSize: "26px"}}/>
          </IconWrapper>
        </NotificationsIcon>
        
        <Link to="/profile">
          <AvatarPic
            aria-label="recipe"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEv7o0R6e3MGA/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=Nb1zRgdreXpwrx8pfd7ta4_0s4KK6aaeMPyXWiSI6U4"
          />
        </Link>
        
      </OptionsContainer>
    </Container>
  );
};

export default Header;
