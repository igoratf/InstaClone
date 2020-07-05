import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputBase from "@material-ui/core/InputBase";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ImageIcon from "@material-ui/icons/Image";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import {
  Container,
  SearchContainer,
  SuggestedContainer,
  SuggestedTitle,
  DialogHeader
} from "./custom-dialog.styles";
import { CleanButton } from "../../components/post-card/post-card.styles";

const CustomDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} style={{ overflow: "hidden" }}>
      <Container style={{ width: 360 }}>
        <DialogHeader>
          <button
            style={{
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <CloseIcon onClick={onClose}/>
          </button>
          <h3>New Message</h3>
          <CleanButton disabled>Next</CleanButton>
        </DialogHeader>
        <Divider />

        <SearchContainer>
          <h4>To: </h4>
          <Autocomplete
            id="combo-box-demo"
            options={[{ name: "Test" }]}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => (
              <InputBase
                {...params}
                placeholder="Search..."
                style={{ marginLeft: 5 }}
              />
            )}
          />
        </SearchContainer>
        <Divider />

        <SuggestedContainer>
          <SuggestedTitle>Suggested</SuggestedTitle>
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
        </SuggestedContainer>
      </Container>
    </Dialog>
  );
};

export default CustomDialog;
