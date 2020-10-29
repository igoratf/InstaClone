import React from 'react'
import { Container } from './media-mosaic.styles';
import ProfileMedia from '../profile-media/profile-media.component';

const MediaMosaic = ({profilePosts}) => {
    return (
        <Container>
            {profilePosts.map(post => <ProfileMedia imageUrl={post} />)}
        </Container>
    )
}

export default MediaMosaic
