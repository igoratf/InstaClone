import React from "react";
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from "@material-ui/icons/Settings";

import {
  Container,
  Header,
  UserInfo,
  InfoContainer,
  OptionsContainer,
  PersonalInfoContainer
} from "./profile.styles";

import StoryContainer from '../../components/story-container/story-container.component';

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar
          style={{ height: 150, width: 150 }}
          src={
            "https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"
          }
        >
          A
        </Avatar>
        <UserInfo>
          <OptionsContainer>
            <h2 style={{ textAlign: "left" }}>igoratf</h2>
            <button>Edit profile</button>
            <SettingsIcon style={{ paddingLeft: "1rem" }} />
          </OptionsContainer>

          <InfoContainer>
            <span><strong>171 </strong>Posts</span>
            <span><strong>777 </strong>Followers</span>
            <span><strong>902 </strong>Following</span>
          </InfoContainer>

          <InfoContainer>
            <PersonalInfoContainer>
              <strong>Igor Farias</strong>
              <span>Bio</span>
            </PersonalInfoContainer>
          </InfoContainer>
        </UserInfo>
      </Header>
      <StoryContainer profile={true}/>
    </Container>
  );
};

export default Profile;
