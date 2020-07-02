import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
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
  PlaceholderSubtitle
} from "./direct.styles";
import CreateIcon from "@material-ui/icons/Create";
import CustomButton from "../../components/custom-button/custom-button.component";

import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Direct = () => {
  return (
    <Container>
      <PageContainer variant="outlined">
        <DirectListContainer>
          <DirectPageHeader>
            <Title>Direct</Title>
            <CreateIcon style={{ marginLeft: "auto", fontSize: "30px" }} />
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
          <MessagesPlaceholder>
            <PlaceHolderIconContainer>
            <FontAwesomeIcon icon={faPaperPlane} style={{fontSize: "40px"}}/>
            </PlaceHolderIconContainer>
            <PlaceholderTitlte>Your Messages</PlaceholderTitlte>
            <PlaceholderSubtitle>Send private photos and messages to a friend or group.</PlaceholderSubtitle>
            <CustomButton style={{fontWeight: "bold", width: "fit-content"}}>
                Send Message
            </CustomButton>
          </MessagesPlaceholder>
        </ConversationContainer>
      </PageContainer>
    </Container>
  );
};

export default Direct;
