import React from 'react';
import { Container, OptionsContainer, Icon, Avatar } from './header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
    return (
        <Container>
            <h3>Instagram</h3>
            <input type="text" placeholder="Search" />
            <OptionsContainer>
                <Icon>
                    <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
                </Icon><Icon>
                    <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
                </Icon><Icon>
                    <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
                </Icon>
                <Avatar />
            </OptionsContainer>

        </Container>
    )
}

export default Header;
