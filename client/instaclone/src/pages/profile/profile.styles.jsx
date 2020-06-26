import styled from 'styled-components';

export const Container = styled.div`
display: flex;
background-color: #fafafa;
flex-direction: column;
align-items: center;
padding: 20px;
width: 100%;
@media screen and (max-width: 600px) {
    padding: 0;
}
`;

export const Header = styled.div`
padding: 5vh;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 2fr;
grid-gap: 5vw;

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
`;

export const MediaMosaic = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;
align-items: center;
justify-items: center;
max-width: 60vw;
padding-bottom: 5vh;

@media screen and (max-width: 600px) {
    width: 100%;
    max-width: unset;
}
`;

export const MediaContainer = styled.div`
position: relative;
width: 100%;

&:hover > div{
    display: block;
}
`
export const Media = styled.img`
width: 100%;
height: 100%;
max-height: 275px;
max-width: 275px;
min-height: 125px;
min-width: 125px;
`;

export const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(0,0,0,0.3);
display: none;
`;

export const OverlayInfoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`;

export const OverlayInfo = styled.span`
color: white;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-weight: bold;
`;

export const OverlayText = styled.span`
padding: 0 0.5rem;
`;
