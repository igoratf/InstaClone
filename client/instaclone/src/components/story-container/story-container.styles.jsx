import styled from 'styled-components';

export const Container = styled.div`
margin-top: 1rem;
display: flex;
justify-content: flex-start;
align-items: center;
background: ${props => props.profile === "profile" ? 'inherit' : '#fff'};
border: ${props => props.profile === "profile" ? 'none' : '1px solid lightgray'};
// height: 100px;
min-height: 100px;
// width: 600px;
max-width: 600px;
overflow-x: hidden;
overflow-y: hidden;
padding: 10px 0;
scroll-behavior: smooth;
position: relative;
`;

export const ButtonContainer = styled.div`
height: 25px; 
width: 25px;
margin: 0 10px;
z-index: 2;
`;

export const SliderContainer = styled.div`
width: 100%; 
display: flex; 
justify-content: space-between; 
position: fixed; 
max-width: 600px;
min-width: 100px;
`;

export const ArrowButton = styled.button`
border-radius: 50%;
cursor: pointer;
width: 25px;
height: 25px;
border: none;
background-color: rgba(240, 240, 240, 0.7);
outline: none;
display: flex;
align-items: center;
justify-content: flex-end;
`;