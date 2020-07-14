import React, { useState } from "react";
import {
  Container,
  StoryWrapper,
  Header,
  Author,
  StoryOptions,
  UserInfo,
  Footer,
  MessageInput,
  MessageBox,
  MessageInputContainer,
  SendButton,
  OptionsContainer,
} from "./story.styles";

import Avatar from "@material-ui/core/Avatar";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Story = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <StoryWrapper>
        <Header>
          <UserInfo>
            <Avatar style={{ width: 30, height: 30 }}>I</Avatar>
            <Author>Name</Author>
          </UserInfo>

          <OptionsContainer>
            <StoryOptions />
          </OptionsContainer>
        </Header>

        <Footer>
          <MessageBox>
            <MessageInputContainer>
              <MessageInput
                placeholder="Send a message..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </MessageInputContainer>
          </MessageBox>
            <SendButton style={isFocused ? {width: 0, opacity: 0} : null}>
              <SendOutlinedIcon />
            </SendButton>
        </Footer>
      </StoryWrapper>
    </Container>
  );
};

export default Story;
