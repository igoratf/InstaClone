import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import { MediaContainer, Media, Overlay, OverlayText, OverlayInfo, OverlayInfoContainer } from './post-media.styles';

const PostMedia = () => {
    return (
        <MediaContainer>
          <Media
            src={
              "https://avatars3.githubusercontent.com/u/23489054?s=460&u=0e0e7e963d782b032fa851c83955cd7f937279a8&v=4"
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
    )
}

export default PostMedia
