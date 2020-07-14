import React from 'react';
import { Container, StoryWrapper, Header, Author } from './story.styles';

import Avatar from '@material-ui/core/Avatar';

const Story = () => {
    return (
        <Container>
            <StoryWrapper>
                <Header>
                    <Avatar style={{width: 30, height: 30}}>I</Avatar>
                    <Author>Name</Author>
                </Header>
            </StoryWrapper>
        </Container>
    )
}

export default Story
