import React from "react";

import {
  Container,
  ConversationHeader,
  DirectBox,
  ConversationBalloonOthers,
  ConversationBallonSelf,
  ContactContainer,
  ContactName
} from "./conversation.styles";

import Divider from "@material-ui/core/Divider";
import Avatar from '@material-ui/core/Avatar';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Conversation = () => {
  return (
    <Container>
      <ConversationHeader>
          <ContactContainer>
          <Avatar
          style={{width: 30, height: 30}}
          src={
            "https://media-exp1.licdn.com/dms/image/C5603AQGILi-KLXR1DQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=jkHVWOiRiOOFpO2CmLunXSDiHHc-gDqTGPhn15XrcpI"
          }
        />
        <ContactName>test</ContactName>
          </ContactContainer>
        <InfoOutlinedIcon />
      </ConversationHeader>
      <Divider />
      <DirectBox>
        <ConversationBalloonOthers>
          test test test test test test test test test test test test
        </ConversationBalloonOthers>
        <ConversationBallonSelf>
          test test test test test test test test test test test test
        </ConversationBallonSelf>
      </DirectBox>
    </Container>
  );
};

export default Conversation;
