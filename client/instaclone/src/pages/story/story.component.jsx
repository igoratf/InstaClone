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
  Content
} from "./story.styles";

import Avatar from "@material-ui/core/Avatar";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Snackbar from "@material-ui/core/Snackbar";

const Story = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [message, setMessage] = useState("");
  const [snack, setSnack] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { open, vertical, horizontal } = snack;

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const onSubmitMessage = () => {
    setSnack({ ...snack, open: true });
    setMessage("");
  };

  const handleClose = () => {
    setSnack({ ...snack, open: false });
  };

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
        <Content>
          <div>
            
          </div>
          Content
          <Footer>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="Message sent!"
            key={vertical + horizontal}
            style={{ bottom: "10vh" }}
          />

          <MessageBox>
            <MessageInputContainer>
              <MessageInput
                placeholder="Send a message..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={message}
                onChange={(e) => onChangeMessage(e)}
              />
            </MessageInputContainer>
          </MessageBox>
          <SendButton onClick={() => onSubmitMessage()}>
            <SendOutlinedIcon />
          </SendButton>
        </Footer>
        </Content>
      </StoryWrapper>
    </Container>
  );
};

export default Story;
