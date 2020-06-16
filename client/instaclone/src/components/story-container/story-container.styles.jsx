import styled from 'styled-components';

export const Container = styled.div`
margin-top: 25px;
display: flex;
justify-content: flex-start;
align-items: center;
background: #fff;
border: 1px solid lightgray;
height: 100px;
width: 600px;
overflow-x: hidden;
`;

export const ButtonContainer = styled.div`
position: sticky;
height: 25px; 
width: 25px; 
right: 0;
z-index: 2;
`

export const ArrowButton = styled.button`
border-radius: 50%;
cursor: pointer;
width: 25px;
height: 25px;
border: none;
background-color: rgba(240, 240, 240, 0.7);
`;