import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

import { Container, SearchInput, CancelButton } from "./search-box.styles";
import { theme } from '../../styles.config';

const { searchBarIconSize } = theme;

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  return (
    <Container>
      <SearchIcon style={searchBarIconSize} />
      <SearchInput
        placeholder="Search"
        value={searchText}
        onChange={(e) => handleInputChange(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ fontSize: 13, width: isFocused ? '100%' : '50px'} }
      />
      <CancelButton  style={{...searchBarIconSize, visibility: isFocused ? 'visible' : 'hidden'}} />
    </Container>
  );
};

export default SearchBox;
