import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Container, SearchInput } from './search-box.styles';

const SearchBox = () => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        const { value}  = event.target;
        setSearchText(value);

        console.log(value);
    }

    return (
        <Container>
            <SearchIcon style={{fontSize: 14}}/>
            <SearchInput placeholder="Search" value={searchText} onChange={(e) => handleInputChange(e)} style={{fontSize: 13}}/>
        </Container>
    )
}

export default SearchBox;
