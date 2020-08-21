import styled from 'styled-components';

export const MediaContainer = styled.div`
position: relative;
width: 100%;
cursor: pointer;
max-height: 275px;
max-width: 275px;
&:hover > div{
    display: block;
}
`
export const Media = styled.img`
width: 100%;
height: 100%;
min-height: 100px;
min-width: 100px;
`;

export const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(0,0,0,0.3);
display: none;
`;

export const OverlayInfoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`;

export const OverlayInfo = styled.span`
color: white;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-weight: bold;
`;

export const OverlayText = styled.span`
padding: 0 0.5rem;
`;
