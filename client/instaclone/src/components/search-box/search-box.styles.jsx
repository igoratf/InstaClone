import styled from "styled-components";
import CancelIcon from "@material-ui/icons/Cancel";

import { theme } from '../../styles.config';

const { lightGray } = theme;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 215px;
  height: 30px;
  min-width: 125px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  padding-left: 1rem;
  color: ${lightGray};
`;

export const SearchInput = styled.input`
  background-color: transparent;
  padding: 8px;
  height: 10px;
  border: none;
  outline: none;
  transition: width 0.15s;

  && {
    font-size: 13px;
    &::placeholder {
      color: ${lightGray};
    }
  }
`;

export const CancelButton = styled(CancelIcon)`
  && {
    color: ${lightGray};
    cursor: pointer;
    right: 0;
    padding: 0.2rem;
  }
`;
