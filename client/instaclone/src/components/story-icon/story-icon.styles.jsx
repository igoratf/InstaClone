import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem;
`

export const BorderWrapper = styled(Link)`
padding: 0.15rem;
border-radius: 50%;
background: linear-gradient(#ca4b8e, #f18639, #e24464, #da497d, #c74c92);
cursor: pointer;
`


export const Icon = styled(Avatar)`
&& {
    height: 80px;
    width: 80px;
}
`;