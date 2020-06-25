import styled from 'styled-components';
import StoryContainer from '../../components/story-container/story-container.component';


export const Container = styled.div`
display: flex;
background-color: #fafafa;
flex-direction: column;
align-items: center;
padding: 20px;
height: 100%;
width: 100%;
`;

export const Header = styled.div`
padding: 5vh;
max-height: 150px;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 2fr;
grid-gap: 5vw;
margin-bottom: 30px;

`;

export const UserInfo = styled.div`
display:grid;
grid-template-rows: repeat(3, 40px);
grid-template-columns: 1fr;
grid-gap: 10px;
align-items: center;
justify-items: start;
`;

export const OptionsContainer = styled.div`
display: grid;
grid-template-rows: 1fr; 
grid-template-columns: 1fr 1.1fr 1fr;
align-items: center;
width: 100%;

`;

export const InfoContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
text-align: left;

&& {
    & > * {
        font-size: 14px;
    }
}
`;



export const PersonalInfoContainer = styled.div`
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-gap: 5px;
justify-items: start;
`;

export const ProfileFeed = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 60vw;
`

export const ProfileTabs = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 30px;
border-top: 1px solid lightgray;
`