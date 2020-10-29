import styled from 'styled-components';

export const ContainerWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 0 2vw;
position: relative;
`;

export const Container = styled.div`
margin-top: 1rem;
display: flex;
justify-content: flex-start;
align-items: center;
background: ${props => props.profile === "profile" ? 'inherit' : '#fff'};
border: ${props => props.profile === "profile" ? 'none' : '1px solid lightgray'};
min-height: 100px;
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
position: absolute; 
max-width: 600px;
min-width: 100px;
margin-top: 6px;
`;

export const ArrowButton = styled.button`
border-radius: 50%;
cursor: pointer;
width: 27px;
height: 27px;
border: none;
background-color: rgba(240, 240, 240, 0.7);
outline: none;
display: flex;
align-items: center;
justify-content: flex-end;
`;