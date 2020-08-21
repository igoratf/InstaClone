import React from 'react';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import { MediaContainer, Media, Overlay, OverlayText, OverlayInfo, OverlayInfoContainer } from './profile-media.styles';

const ProfileMedia = ({imageUrl}) => {
    return (
        <MediaContainer>
          <Media
            src={imageUrl}
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
    )
}

export default ProfileMedia
