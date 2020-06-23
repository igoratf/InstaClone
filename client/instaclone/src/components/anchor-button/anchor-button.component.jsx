import React from 'react'
import { Container } from './anchor-button.styles';

const AnchorButton = ({children, ...otherProps}) => {
    return (
        <Container {...otherProps}>
            {children}
        </Container>
    )
}

export default AnchorButton;
