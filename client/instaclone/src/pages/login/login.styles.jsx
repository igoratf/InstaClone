import styled, { css } from 'styled-components';
import Logo from '../../assets/logo.png';

import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from '@material-ui/core/Paper';
import { OutlinedInput } from '@material-ui/core';

const primaryColor = "#1095f6";

const anchorStyles = css`
cursor: pointer;

&:hover {
    text-decoration: underline;
}
`;

const cardSize = css`
width: 40vw;
`

export const Container = styled.div`
display: flex;
background-color: #fafafa;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
`;

export const LoginContainer = styled(Paper)`
&& {
display: flex;
flex-direction: column;
align-items: center;
padding: 30px;
margin: 30px;

${cardSize};
}
`;

export const Title = styled.h1`
background-image: url(${Logo});
width: 175px;
height: 50px;
background-repeat: no-repeat;
background-size: cover;
`;

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Subtitle = styled.span`
font-size: small;
`;

export const InputContainer = styled(FormControl)`
&& {
    padding: 8px;
}
`;

export const Input = styled(OutlinedInput)`
&& {     
    background: #fafafa;
}
`;

export const CustomInputLabel = styled(InputLabel)`
&& { 
    font-size: 12px;
}
`

export const CustomButton = styled(Button)`
&& {
    background-color: ${primaryColor};
    color: white;
    width: 100%;
    text-transform: none;

    &:hover {
        background-color: ${primaryColor};
        color: white;
    }
}
`;

export const ForgotPasswordAnchor = styled.a`
font-size: x-small;
color: #00376b;

${anchorStyles};
`;

export const NoAccountContainer = styled(Paper)`
padding: 20px;
display: flex;
justify-content: center;

${cardSize};
`;

export const NoAccountButton = styled.a`
color: ${primaryColor};
font-size: small;
font-weight: bold;
margin: 0 0.5rem;

${anchorStyles};
`;


export const LoginButtonContainer = styled.div`
width: 100%;
padding: 10px;
`;
