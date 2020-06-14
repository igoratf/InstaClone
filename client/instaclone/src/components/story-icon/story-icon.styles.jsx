import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 15px;

&:hover {
    cursor: pointer;
}
`

export const BorderWrapper = styled.div`
padding: 1px;
border-radius: 50%;
background: linear-gradient(#ca4b8e, #f18639, #e24464, #da497d, #c74c92);
`


export const Icon = styled.div`
background: white;
border-radius: 50%;
height: 60px;
width: 60px;
`;