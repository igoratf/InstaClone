import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
align-self: flex-start;

& > hr {
    width: 100%;
}
`;

export const ConversationHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 0 20px;
height: 68px;
`;

export const DirectBox = styled.div`
display: grid;
justify-items: center;
align-items: center;
grid-template-columns: 1fr;
width: 100%;
`;

export const ConversationBalloonOthers = styled.div`
border: 1px solid lightgray;
border-radius: 30px;
min-height: 44px;
padding: 16px;
margin: 16px;
max-width: 200px;
justify-self: start;
text-align: center;
`;

export const ConversationBallonSelf = styled.div`
border-radius: 30px;
background-color: #efefef;
min-height: 44px;
padding: 16px;
margin: 16px;
max-width: 200px;
justify-self: end;
text-align: center;
`;

export const ContactContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ContactName = styled.h3`
margin: 0 0 0 10px;
`;