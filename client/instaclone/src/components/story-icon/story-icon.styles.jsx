import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 15px;
`

export const BorderWrapper = styled.div`
padding: 0.12rem;
border-radius: 50%;
background: linear-gradient(#ca4b8e, #f18639, #e24464, #da497d, #c74c92);
cursor: pointer;
`


export const Icon = styled(Avatar)`
&& {
    height: 60px;
    width: 60px;
}
`;