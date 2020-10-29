import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;
align-items: center;
justify-items: center;
width: 100%;
max-width: 60vw;
padding: 0 2vw;
padding-bottom: 5vh;

@media screen and (max-width: 600px) {
    width: 100%;
    max-width: unset;
}
`;