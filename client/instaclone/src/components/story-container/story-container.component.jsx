import React from 'react'
import { Container } from './story-container.styles';
import StoryIcon from '../story-icon/story-icon.component';

export default function StoryContainer() {
    return (
        <Container>
            <StoryIcon />
            <StoryIcon />
            <StoryIcon />
            <StoryIcon />
            <StoryIcon />
        </Container>
    )
}
