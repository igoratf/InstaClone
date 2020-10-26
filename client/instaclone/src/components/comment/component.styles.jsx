import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
text-align: center;
margin-bottom: 0.2rem;
width: 100%;
`;


export const Author = styled.span`
font-size: 14px;
font-weight: bold;
padding-right: 0.2rem;
`;

export const Content = styled.span`
font-size: 14px;
`;

export const LikeButtonContainer = styled.div`
margin-left: auto;
`;

export const LikeButton = styled(FavoriteBorderIcon)`
&& {
    font-size: 14px;
    color: gray;
    cursor: pointer;

    &:hover {
        color: red;
    }
}
`;

LikeButton.displayName = "LikeButton";

export const LikeButtonFilled = styled(FavoriteIcon)`
&& {
    font-size: 14px;
    color: red;
    cursor:pointer;
}
`;

LikeButtonFilled.displayName = "DislikeButton";