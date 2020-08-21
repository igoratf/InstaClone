import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";

import PostMedia from '../../components/post-media/post-media.component';

import {
  Container,
  Header,
  UserInfo,
  InfoContainer,
  OptionsContainer,
  PersonalInfoContainer,
  ProfileFeed,
  MediaMosaic,
  Media,
  MediaContainer,
  Overlay,
  OverlayInfoContainer,
  OverlayInfo,
  OverlayText,
  EditButton,
  UserName,
  NameTitle,
  UserPhoto
} from "./profile.styles";

import StoryContainer from "../../components/story-container/story-container.component";
import CustomTabs from "../../components/custom-tabs/custom-tabs.component";

const Profile = () => {
  return (
    <Container>
      <Header>
        <UserPhoto
          src={
            "https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"
          }
        >
          A
        </UserPhoto>
        <UserInfo>
          <OptionsContainer>
            <UserName>igoratf</UserName>
            <EditButton>Edit Profile</EditButton>
            <SettingsIcon style={{ paddingLeft: "0.75rem", cursor: "pointer" }} />
          </OptionsContainer>

          <InfoContainer>
            <span>
              <strong>171 </strong>Posts
            </span>
            <span>
              <strong>777 </strong>Followers
            </span>
            <span>
              <strong>902 </strong>Following
            </span>
          </InfoContainer>

          <InfoContainer>
            <PersonalInfoContainer>
              <NameTitle>Igor Farias</NameTitle>
              <span>Bio</span>
            </PersonalInfoContainer>
          </InfoContainer>
        </UserInfo>
      </Header>
      <StoryContainer profile={true} />

      <ProfileFeed>
        <CustomTabs />
      </ProfileFeed>

      <MediaMosaic>
        <PostMedia />
        
      </MediaMosaic>
    </Container>
  );
};

export default Profile;
