import styled from 'styled-components';

const gray = "rgb(142, 142, 142)";

export const Container = styled.div`
display: flex;
align-items: center;
padding: 8px;
width: 215px;
height: 30px;
min-width: 125px;
border: 1px solid #dbdbdb;
background-color: #fafafa;
color: ${gray};
`;

export const SearchInput = styled.input`
background-color: transparent;
width: 100%;
padding: 8px;
height: 10px;
border: none;
outline: none;

&& {
    &::placeholder {
        color: ${gray};
    }
}
`