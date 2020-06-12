import React from 'react'
import { Container } from './feed-page.styles';
import StoryContainer from '../../components/story-container/story-container.component';

export default function FeedPage() {
    return (
        <Container>
            <StoryContainer />
            <div></div>
        </Container>
    )
}
