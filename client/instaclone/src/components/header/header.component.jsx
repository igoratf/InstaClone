import React, { useState } from "react";
import { withRouter } from "react-router";

import Logo from "../../assets/logo-inst.png";

import { Link } from 'react-router-dom';

import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import {
  Container,
  OptionsContainer,
  LinkContainer,
  IconWrapper,
  CustomIcon,
  AvatarPic,
  LogoImage,
  LogoContainer,
  NotificationsIcon
} from "./header.styles";

import SearchBox from '../search-box/search-box.component';

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import {  faPaperPlane, faCompass } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane as solidPlane} from "@fortawesome/free-solid-svg-icons";

import NotificationsDropdown from '../notifications-dropdown/notifications-dropdown.component';

const Header = ({location}) => {
  const path = location.pathname;
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <Container>
      <LogoContainer to="/">
        <LogoImage src={Logo} />
      </LogoContainer>
      <SearchBox />
      <OptionsContainer>
        <LinkContainer to="/">
          <IconWrapper>
            {path === "/feed" ? <HomeIcon style={{fontSize: "28px"}} /> : <HomeOutlinedIcon style={{fontSize: "28px"}}/>}
          </IconWrapper>
        </LinkContainer>
        <LinkContainer to="/direct">
          <IconWrapper>
          {path === "/direct" ? <CustomIcon icon={solidPlane} style={{ fontSize: "20px" }} /> : <CustomIcon icon={faPaperPlane} style={{ fontSize: "20px" }} />}
          </IconWrapper>
        </LinkContainer>
        <LinkContainer>
          <IconWrapper>
          <CustomIcon icon={faCompass} style={{ fontSize: "22px" }} />
          </IconWrapper>
        </LinkContainer>
        <NotificationsIcon style={{ paddingLeft: "8px", paddingRight: "16px" }} onClick={() => setShowNotifications(!showNotifications)}>
          <IconWrapper>
            <FavoriteBorderIcon style={{fontSize: "26px"}}/>
          </IconWrapper>
        </NotificationsIcon>

        
        <Link to="/profile">
          <AvatarPic
            aria-label="recipe"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEv7o0R6e3MGA/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=Nb1zRgdreXpwrx8pfd7ta4_0s4KK6aaeMPyXWiSI6U4"
            style={path === "/profile" ? {border: '1px solid black'} : null}
          />
        </Link>
        
      </OptionsContainer>

      {showNotifications ? <NotificationsDropdown /> : null}
    </Container>
  );
};

export default withRouter(Header);
