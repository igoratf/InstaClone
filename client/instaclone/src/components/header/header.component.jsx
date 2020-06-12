import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Container, OptionsContainer, IconContainer, IconWrapper, Icon, Avatar } from './header.styles';
import { faPaperPlane, faCompass, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Container>
            <h3>Instagram</h3>
            <input type="text" placeholder="Search" />
            <OptionsContainer>
                <IconContainer>
                    <IconWrapper>
                        <HomeIcon fontSize="large"/>
                    </IconWrapper>
                </IconContainer>
                <IconContainer>
                    <Icon icon={faPaperPlane} size="2x"/>
                </IconContainer><IconContainer>
                    <Icon icon={faCompass} size="2x"/>
                </IconContainer><IconContainer>
                    <Icon icon={faHeart} size="2x"/>
                </IconContainer>
                <Avatar />
            </OptionsContainer>

        </Container>
    )
}

export default Header;
