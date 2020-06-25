import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '@material-ui/core/Avatar';

export const Container = styled.div`
// display: flex;
// justify-content: space-evenly;
// align-items: center;
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items: center;
justify-items: center;
border-bottom: 1px solid lightgray;
`;

export const LogoImage = styled.img`
max-width: 150px;
max-height: 40px;`

export const OptionsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const IconContainer = styled.div`
padding: 0 0.2rem;
font-size: 12px;
height: 54px;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
}
`

export const IconWrapper = styled.div`
cursor: pointer;
`

export const Icon = styled(FontAwesomeIcon)`
padding: 0;
cursor: pointer;
`

export const AvatarPic = styled(Avatar)`
&& {
    height: 22px;
    width: 22px;
}
`