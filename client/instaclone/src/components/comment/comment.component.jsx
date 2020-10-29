import React, { useState } from 'react'
import { Container, Author, Content, LikeButtonContainer, LikeButton, LikeButtonFilled } from './component.styles';

const Comment = ({author, content}) => {
    const [liked, setLiked] = useState(false);

    const likeComment = () => {
        setLiked(!liked);
    }
    return (
        <Container>
            <Author>{author}</Author>
            <Content>{content}</Content>
            <LikeButtonContainer>
                {liked ? <LikeButtonFilled onClick={likeComment}/> : <LikeButton onClick={likeComment}/>}
            </LikeButtonContainer>
        </Container>
    )
}

export default Comment;
