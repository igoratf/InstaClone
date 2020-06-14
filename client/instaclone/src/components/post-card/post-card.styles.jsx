import styled from 'styled-components';
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
`