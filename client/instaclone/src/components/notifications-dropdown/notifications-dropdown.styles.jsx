import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
display: flex;
flex-direction: column;
top: 60px;
right: 15vw;
background-color: white;
border-radius: 6px;
box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975);
min-width: 300px;
max-width: 400px;
z-index: 5;
padding: 5px;
`;

export const Pointer = styled.div`
position: absolute;
background-color: white;
top: 0;
right: 0;
width: 20px;
height: 20px;
transform: rotate(45deg);
margin-top: -20px;
z-index: -1;
box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975);
`;