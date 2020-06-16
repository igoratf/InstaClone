import React from 'react'
import { Container, Author, Content, LikeButtonContainer, LikeButton } from './component.styles';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Comment = ({author, content}) => {
    return (
        <Container>
            <Author>{author}</Author>
            <Content>{content}</Content>
            <LikeButtonContainer>
                <LikeButton />
                {/* <FavoriteBorderIcon style={{ fontSize: '14px', color: 'gray'}}/> */}
            </LikeButtonContainer>
        </Container>
    )
}

export default Comment;
