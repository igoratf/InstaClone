import styled from 'styled-components';

import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from '@material-ui/core/Button';

export const FormContainer = styled.form`
display: flex;
flex-grow: 1; 
justify-content: center;
align-items: center;
`;

export const OptionsIcon = styled(MoreVertIcon)`
    transform: rotate(90deg);
`;

export const CommentTextArea = styled.textarea`
flex-grow: 1; 
max-height: 80px; 
border: none; 
outline: none; 
resize: none;
`;

export const PostButton = styled(Button)`
&& {
    text-transform: none;
    opacity: ${props => props.disabled ? 0.3 : 1};
    color: #1696f6!important;
}
`;

export const CommentsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
`

