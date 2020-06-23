import styled from "styled-components";
import CancelIcon from "@material-ui/icons/Cancel";

import { theme } from '../../styles.config';

const { lightGray } = theme;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 215px;
  height: 30px;
  min-width: 125px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  color: ${lightGray};
`;

export const SearchInput = styled.input`
  background-color: transparent;
  width: ${(props) => (props.isFocused ? "100%" : "50px")};
  padding: 8px;
  height: 10px;
  border: none;
  outline: none;
  transition: width 0.15s;

  && {
    &::placeholder {
      color: ${lightGray};
    }
  }
`;

export const CancelButton = styled(CancelIcon)`
  && {
    color: ${lightGray};
    cursor: pointer;
    position: "absoute";
    right: 0;
    visibility: ${(props) => (props.isFocused ? "visible" : "hidden")};
  }
`;
