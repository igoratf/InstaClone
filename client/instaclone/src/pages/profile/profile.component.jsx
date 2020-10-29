import React, { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";

import {
  Container,
  Header,
  UserInfo,
  InfoContainer,
  OptionsContainer,
  PersonalInfoContainer,
  ProfileFeed,
  EditButton,
  UserName,
  NameTitle,
  UserPhoto
} from "./profile.styles";

import MediaMosaic from '../../components/media-mosaic/media-mosaic.component';
import StoryContainer from "../../components/story-container/story-container.component";
import CustomTabs from "../../components/custom-tabs/custom-tabs.component";

const Profile = () => {
  const [profilePosts, setProfilePosts] = useState([]);

  const onImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setProfilePosts([...profilePosts, URL.createObjectURL(img)]);
    }
  }

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
      <div>
        <label for="imgPost">New image</label>
        <input type="file" id="imgPost" name="imgPost" onChange={onImageUpload} accept="image/*" style={{display: 'none'}}/>
      </div>
      <ProfileFeed>
        <CustomTabs />
      </ProfileFeed>

      <MediaMosaic profilePosts={profilePosts}/>
    </Container>
  );
};

export default Profile;
