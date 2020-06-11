import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`

export const OptionsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const IconContainer = styled.div`
padding: 0 15px;
font-size: 12px;
`

export const Icon = styled(FontAwesomeIcon)`
&:hover {
    cursor: pointer;
}
`

export const Avatar = styled.div`
height: 30px;
width: 30px;
border: 1px solid black;    
border-radius: 50%;
`