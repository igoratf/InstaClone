import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme, anchorStyles } from '../../styles.config';

const { primaryColor } = theme;

export const Container = styled(Link)`
color: ${primaryColor};
text-align: center;

${anchorStyles};
`;