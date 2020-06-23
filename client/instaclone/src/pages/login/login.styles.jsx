import styled from "styled-components";
import Logo from "../../assets/logo-inst.png";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import { theme, anchorStyles, formCardSize } from '../../styles.config';

const { primaryColor } = theme;


export const Container = styled.div`
display: flex;
background-color: #fafafa;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
overflow: scroll;
padding: 2rem;
`;

export const LoginContainer = styled(Paper)`
&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    margin: 30px;

    ${formCardSize};
}
`;

export const Title = styled.div`
background-image: url(${Logo});
width: 175px;
height: 60px;
background-repeat: no-repeat;
background-size: cover;
`;

export const FormContainer = styled.form`
width: 100%;
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: 1fr;

&& {
    & > * {
    padding: 8px;
    }
}
`;

export const Subtitle = styled.span`
font-size: small;
`;

export const CustomButton = styled(Button)`
&& {
    background-color: ${primaryColor}!important;
    color: white !important;
    width: 100%;
    text-transform: none;
    opacity: ${(props) => (props.disabled ? 0.3 : 1)};

    &:hover {
    background-color: ${primaryColor};
    color: white;
    }
}
`;

export const ButtonContainer = styled.div`
margin-top: 10px;
padding-top: 10px;
`;

export const ForgotPasswordAnchor = styled.a`
font-size: x-small;
color: #00376b;

${anchorStyles};
`;

export const SecondaryCard = styled(Paper)`
${formCardSize};

padding: 20px;
`;

export const InputField = styled(TextField)`
&& {

    & > div > input {
        background-color: #fafafa;
    }
}
`;


