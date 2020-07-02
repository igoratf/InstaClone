import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
`;

export const Container = styled.div`
position: absolute;
display: flex;
flex-direction: column;
top: 55px;
right: 13vw;
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
top: 60px;
right: 16vw;
width: 19px;
height: 19px;
transform: rotate(45deg);
margin-top: -10px;
z-index: -1;
box-shadow: 0 0 5px 1px rgba(0,0,0,.0975);
borde: 1px solid #fff;
`;