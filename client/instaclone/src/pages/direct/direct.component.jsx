import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ImageIcon from "@material-ui/icons/Image";
import {
  Container,
  PageContainer,
  DirectListContainer,
  DirectPageHeader,
  Title,
  ConversationContainer,
  MessagesPlaceholder,
  PlaceholderTitlte,
  PlaceHolderIconContainer,
  PlaceholderSubtitle,
  DirectIcon
} from "./direct.styles";
import CustomButton from "../../components/custom-button/custom-button.component";

import { faPaperPlane, faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Conversation from "../../components/conversation/conversation.component";
import CustomDialog from "../../components/custom-dialog/custom-dialog.component";


const Direct = () => {
  const [conversationVisible, setConversationVisible] = useState(true);
  const [dialogOpened, setDialogOpened] = useState(false);

  const openDialog = () => {
    setDialogOpened(true);
  }

  const closeDialog = () => {
    setDialogOpened(false);
  }

  return (
    <Container>
      <PageContainer variant="outlined">
        <DirectListContainer>
          <DirectPageHeader>
            <Title>Direct</Title>
            <DirectIcon icon={faEdit} onClick={openDialog}/>
          </DirectPageHeader>
          <Divider />

          <List style={{ overflowY: "auto" }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Someone" secondary="Something" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Someone" secondary="Something" />
            </ListItem>

            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Someone" secondary="Something" />
            </ListItem>
          </List>
        </DirectListContainer>

        <ConversationContainer>
          {conversationVisible ? (
            <MessagesPlaceholder>
              <PlaceHolderIconContainer>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ fontSize: "40px" }}
                />
              </PlaceHolderIconContainer>
              <PlaceholderTitlte>Your Messages</PlaceholderTitlte>
              <PlaceholderSubtitle>
                Send private photos and messages to a friend or group.
              </PlaceholderSubtitle>
              <CustomButton
                style={{ fontWeight: "bold", width: "fit-content" }}
                onClick={openDialog}
              >
                Send Message
              </CustomButton>
            </MessagesPlaceholder>
          ) : (
            <Conversation />
          )}
        </ConversationContainer>
      </PageContainer>

      <CustomDialog open={dialogOpened} onClose={closeDialog} />
    </Container>
  );
};

export default Direct;
