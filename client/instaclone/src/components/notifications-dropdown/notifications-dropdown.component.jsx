import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import {
  Container,
  Pointer
} from "./notifications-dropdown.styles";
import { Divider } from "@material-ui/core";

const NotificationsDropdown = () => {
  return (
    <Container>
      <List style={{ maxWidth: 400, zIndex: 10, position: 'relative' }}>
        <Pointer />
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
      </List>
    </Container>
  );
};

export default NotificationsDropdown;
