import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 20px;
`;

export const PageContainer = styled(Paper)`
display: grid;
grid-template-columns: 2fr 4fr;
max-width: 935px;
width: 100%;
height: 100%;
`;

export const DirectListContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;

export const DirectPageHeader = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-items: center;
align-items: center;
padding: 15px;
height: 68px;
`;

export const Title = styled.h5`
padding: 10px;
margin: 0;
grid-column: 2/2;
font-size: 16px;
font-weight: bold;
text-overflow: ellipsis;
text-align: center;
font-family: font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ConversationContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-items: center;
border-left: 1px solid rgba(0, 0, 0, 0.12);
`;

export const MessagesPlaceholder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const PlaceHolderIconContainer = styled.div`
border-radius: 50%;
min-height: 100px;
min-width: 100px;
border: 2px solid black;
display: flex;
justify-content: center;
align-items: center;
`;

export const PlaceholderTitlte = styled.h2`
font-size: 22px;
font-weight: unset;
margin-bottom: 0;
`;

export const PlaceholderSubtitle = styled.p`
color: rgba(0, 0, 0, 0.54);
margin-bottom: 25px;
`;