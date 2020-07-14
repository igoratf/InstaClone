import styled from 'styled-components';

export const Container = styled.div`
background-color: #262626;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const StoryWrapper = styled.div`
width: 100%;
height: 100%;
max-width: 360px;
max-height: 400px;
display: flex;
justify-content: center;
align-items: flex-start;
border: 1px solid white;
`;

export const Header = styled.div`
display: flex;
width: 100%;
justify-content: flex-start;
align-items: center;
padding: 10px;
`;

export const Author = styled.span`
padding-left: 6px;
color: white;
font-weight: bold;
`;