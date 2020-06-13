import React from 'react'
import { Container, PostContainer } from './feed-page.styles';
import StoryContainer from '../../components/story-container/story-container.component';
import PostCard from '../../components/post-card/post-card.component';

export default function FeedPage() {
    return (
        <Container>
            <StoryContainer />
            <PostContainer>
                <PostCard />
            </PostContainer>
        </Container>
    )
}
