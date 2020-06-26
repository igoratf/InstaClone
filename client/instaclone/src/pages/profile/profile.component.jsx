import React from "react";
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from "@material-ui/icons/Settings";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from '@material-ui/icons/ModeComment';

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
  OverlayText
} from "./profile.styles";

import StoryContainer from "../../components/story-container/story-container.component";
import CustomTabs from "../../components/custom-tabs/custom-tabs.component";

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
              <strong>Igor Farias</strong>
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
        <MediaContainer>
          <Media
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"
            }
          />
          <Overlay>
            <OverlayInfoContainer>
              <OverlayInfo>
                <FavoriteIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
              <OverlayInfo>
                <ModeCommentIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
            </OverlayInfoContainer>
          </Overlay>
        </MediaContainer>
        <MediaContainer>
          <Media
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"
            }
          />
          <Overlay>
            <OverlayInfoContainer>
              <OverlayInfo>
                <FavoriteIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
              <OverlayInfo>
                <ModeCommentIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
            </OverlayInfoContainer>
          </Overlay>
        </MediaContainer>
        <MediaContainer>
          <Media
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"
            }
          />
          <Overlay>
            <OverlayInfoContainer>
              <OverlayInfo>
                <FavoriteIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
              <OverlayInfo>
                <ModeCommentIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
            </OverlayInfoContainer>
          </Overlay>
        </MediaContainer>
        <MediaContainer>
          <Media
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"
            }
          />
          <Overlay>
            <OverlayInfoContainer>
              <OverlayInfo>
                <FavoriteIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
              <OverlayInfo>
                <ModeCommentIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
            </OverlayInfoContainer>
          </Overlay>
        </MediaContainer>
        <MediaContainer>
          <Media
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"
            }
          />
          <Overlay>
            <OverlayInfoContainer>
              <OverlayInfo>
                <FavoriteIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
              <OverlayInfo>
                <ModeCommentIcon />
                <OverlayText>275</OverlayText>
              </OverlayInfo>
            </OverlayInfoContainer>
          </Overlay>
        </MediaContainer>
      </MediaMosaic>
    </Container>
  );
};

export default Profile;
