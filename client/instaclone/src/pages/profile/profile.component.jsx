import React from "react";
import Avatar from "@material-ui/core/Avatar";

import { Container, Header, UserInfo, InfoContainer } from "./profile.styles";

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar style={{ height: 150, width: 150 }} src={"https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"}>A</Avatar>
        <UserInfo>
          <InfoContainer >
            <h2>igoratf</h2>
            <button>Edit profile</button>
            <span>Engrenagem</span>
          </InfoContainer>

          <InfoContainer>
            <span>Posts</span>
            <span>Followers</span>
            <span>Following</span>
          </InfoContainer>

          <InfoContainer>
            <span>Mais info</span>
          </InfoContainer>
        </UserInfo>
      </Header>
    </Container>
  );
};

export default Profile;
