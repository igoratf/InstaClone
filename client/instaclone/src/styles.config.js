import { css } from 'styled-components';

export const theme = {
    primaryColor: "#1095f6",
    secondaryColor: "#8e8e8e",
    textField: {
        fontSize: 12
    }
};

export const anchorStyles = css`
cursor: pointer;

&:hover {
    text-decoration: underline;
}
`;

export const formCardSize = css`
width: 350px;
`;