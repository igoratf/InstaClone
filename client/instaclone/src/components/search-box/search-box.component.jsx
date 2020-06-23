import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

import { Container, SearchInput, CancelButton } from "./search-box.styles";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchText(value);

    console.log(value);
  };

  return (
    <Container>
      <SearchIcon style={{ fontSize: 14 }} />
      <SearchInput
        placeholder="Search"
        value={searchText}
        onChange={(e) => handleInputChange(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
        style={{ fontSize: 13 }}
      />
      <CancelButton isFocused={isFocused} />
    </Container>
  );
};

export default SearchBox;
