import styled from 'styled-components';
import Logo from '../../assets/logo.png';

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Paper from '@material-ui/core/Paper';
import { OutlinedInput } from '@material-ui/core';

const primaryColor = "#1095f6";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const LoginContainer = styled(Paper)`
&& {
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
margin: 40px;
max-width: 375px;
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
margin-top: 20px;
`

export const Subtitle = styled.h4`
color: gray;    
font-weight: bold;
margin: 40px;
text-align: center;
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

export const CustomButton = styled(Button)`
&& {
    background-color: ${primaryColor};
    color: white;
    width: 100%;

    &:hover {
        background-color: ${primaryColor};
        color: white;
    }
}
`
