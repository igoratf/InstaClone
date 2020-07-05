import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-width: 360px;
`;

export const SearchContainer = styled.div`
display: flex;
padding: 0 8px; 
justify-content: space-between; 
align-items: center;
`;

export const SuggestedContainer = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
`;

export const SuggestedTitle = styled.h4`
margin: 8px 0 8px 4px;
`;

export const DialogHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 0;
`;