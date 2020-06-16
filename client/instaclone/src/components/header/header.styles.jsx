import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '@material-ui/core/Avatar';

export const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
border-bottom: 1px solid lightgray;
`;

export const LogoImage = styled.img``

export const OptionsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const IconContainer = styled.div`
padding: 0 5px;
font-size: 12px;
height: 54px;
width: 48px;
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
height: 25px!important;
width: 25px!important;
`