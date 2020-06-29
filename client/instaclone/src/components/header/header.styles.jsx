import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '@material-ui/core/Avatar';

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr 1fr;
align-items: center;
justify-items: center;
border-bottom: 1px solid lightgray;
padding: 0.2rem;
`;

export const LogoContainer = styled.div`
padding: 0 1rem;
`;

export const LogoImage = styled.img`
max-width: 140px;
max-height: 45px;
min-width: 112px;
min-height: 40px;`

export const OptionsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem;
`

export const LinkContainer = styled(Link)`
padding: 0 0.2rem;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
color: black;
}
`;

export const NotificationsIcon = styled.div`
padding: 0 0.2rem;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
`;

export const IconWrapper = styled.div`
cursor: pointer;
`

export const Icon = styled(FontAwesomeIcon)`
padding: 0;
cursor: pointer;
`

export const AvatarPic = styled(Avatar)`
&& {
    cursor: pointer;
    height: 25px;
    width: 25px;
}
`;