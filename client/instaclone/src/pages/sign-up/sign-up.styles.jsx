import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";

import Logo from '../../assets/logo-inst.png';

import { theme, anchorStyles, formCardSize } from '../../styles.config';

const { primaryColor, secondaryColor } = theme;


export const Container = styled.div`
display: flex;
background-color: #fafafa;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
overflow: auto;
padding: 2rem;
`;

export const SignUpContainer = styled(Paper)`
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

export const Subtitle = styled.h3`
color: ${secondaryColor};
font-weight: bold;
margin: 20px;
font-size: 17px;
`;

export const FormContainer = styled.form`
width: 100%;
display: grid;
grid-template-rows: repeat(4, 1fr);
grid-template-columns: 1fr;

&& {
    & > * {
        padding: 8px;
    }

}
`;


export const InputField = styled(TextField)`
&& {

    & > div > input {
        background-color: #fafafa;
    }
}
`;

export const ButtonContainer = styled.div`
margin-top: 10px;
padding-top: 10px;
`;


export const CardFooter = styled.div`
width: 100%;
padding: 10px;
margin-top: 10px;
font-size: small;
color: gray;
`;

export const SecondaryCard = styled(Paper)`
${formCardSize};

padding: 20px;
`;