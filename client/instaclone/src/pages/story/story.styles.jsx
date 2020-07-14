import styled from 'styled-components';

import MoreVertIcon from "@material-ui/icons/MoreVert";


export const Container = styled.div`
background-color: #262626;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0;
`;

export const StoryWrapper = styled.div`
width: 100%;
height: 100%;
max-width: 360px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border: 1px solid white;
margin: 15px;
`;

export const Header = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 10px;
`;

export const Author = styled.span`
padding-left: 6px;
color: white;
font-weight: bold;
font-size: 14px;
`;

export const UserInfo = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;
`;

export const OptionsContainer = styled.div`
`;

export const StoryOptions = styled(MoreVertIcon)`
&& {
    color: white;
    transform: rotate(90deg);
    font-size: 30px;
    cursor: pointer;
}
`;


export const Footer = styled.div`
width: 100%;
padding: 15px 5px 15px 15px;
display: flex;
justify-content: center;
align-items: center;
transition: width 0.15s;
`;

export const MessageBox = styled.div`
width: 100%;
min-height: 44px;
border-radius: 22px;
padding: 10px;
border: 1px solid #dbdbdb;
display: flex;
justify-content: center;
align-items: center;
`;

export const MessageInputContainer = styled.div`
width: 80%;
display; flex;
justify-content: center;
align-items: center;
max-height: 22px;
`;

export const MessageInput = styled.textarea`
width: 100%;
max-height: 22px;
background: transparent;
outline: none;
color: white;
border: none;
resize: none;
&::placeholder {
    color: white;
}
`;

export const SendButton = styled.button`
color: white;
background: transparent;
border: none;
cursor: pointer;
`;