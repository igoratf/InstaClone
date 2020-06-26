import React from 'react';
import {FormButton} from './custom-button.styles';

const CustomButton = ({children, ...otherProps}) => {
    return (
        <FormButton {...otherProps}>{children}</FormButton>
    )
}

export default CustomButton;
