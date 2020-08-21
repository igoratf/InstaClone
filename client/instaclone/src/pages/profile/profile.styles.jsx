import styled from 'styled-components';
import Avatar from "@material-ui/core/Avatar";

const textColor = "#262626";

export const Container = styled.div`
display: flex;
background-color: #fafafa;
flex-direction: column;
align-items: center;
padding: 20px;
width: 100%;
@media screen and (max-width: 600px) {
    padding: 0;
};

&& {
    & > * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
}
`;


export const UserPhoto = styled(Avatar)`
&& {
    height: 130px;
    width: 130px;

    @media screen and (max-width: 360px) {
        height: 115px;
        width: 115px;
    }
}
`;

export const Header = styled.div`
padding: 5vh 3vw;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 2fr;
grid-gap: 5vw;

`;

export const EditButton = styled.button`
background-color: transparent;
border: 1px solid #dbdbdb;
border-radius: 4px;
padding: 5px 9px;
cursor: pointer;
text-align: center;
outline: none;
font-weight: bold;
text-overflow: ellipsis;
font-size: 14px;
line-height: 18px;
color: ${textColor};
`;

export const UserName = styled.h2`
text-overflow: ellipsis;
white-space: nowrap;
color: ${textColor};
font-size: 28px;
line-height: 32px;
font-weight: 300;
text-align: left;
padding: 0 0.75rem;
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
justify-items: start;
margin-top: 1rem;

& > * {
    font-size: 16px;
    line-height: 24px;
}
`;

export const NameTitle = styled.h1`
font-weight: 600;
margin: 0;
color: ${textColor};
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
width: 100%;
max-width: 60vw;
padding: 0 2vw;
padding-bottom: 5vh;

@media screen and (max-width: 600px) {
    width: 100%;
    max-width: unset;
}
`;