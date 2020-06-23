import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-around;
padding: 20px;
height: 100%;
width: 100%;
`;

export const Header = styled.div`
padding: 5vh;
max-height: 150px;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 3fr;
grid-gap: 5vw;
`;

export const UserInfo = styled.div`
display:grid;
grid-template-rows: repeat(3, 40px);
grid-template-columns: repeat(3, 100px);
grid-gap: 10px;
`;

export const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
grid-column: 1 / -1;
`;