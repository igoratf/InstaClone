import styled from 'styled-components';
import Button from "@material-ui/core/Button";


const primaryColor = "#1095f6";

export const FormButton = styled(Button)`
&& {
    background-color: ${primaryColor}!important;
    color: white!important;
    width: 100%;
    text-transform: none;
    opacity: ${props => props.disabled ? 0.3 : 1};

    &:hover {
        background-color: ${primaryColor};
        color: white;
    }
}
`;