import styled from 'styled-components';
import { theme, anchorStyles } from '../../styles.config';

const { primaryColor } = theme;

export const Container = styled.a`
color: ${primaryColor};
text-align: center;

${anchorStyles};
`;