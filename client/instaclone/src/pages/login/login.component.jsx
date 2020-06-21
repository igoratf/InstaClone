import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FacebookIcon from "@material-ui/icons/Facebook";
import Paper from '@material-ui/core/Paper';

import {
  Container,
  LoginContainer,
  FormContainer,
  InputContainer,
  Title,
  Input,
  CustomButton,
  CustomInputLabel,
  NoAccountContainer,
  Subtitle,
  NoAccountButton,
  ForgotPasswordAnchor,
  LoginButtonContainer
} from "./login.styles";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');

  return (
    <Container>
      <LoginContainer variant="outlined">
        <Title></Title>
        <FormContainer>
            <InputContainer variant="outlined" fullWidth>
              <CustomInputLabel htmlFor="component-outlined">Email</CustomInputLabel>
              <Input id="component-outlined" label="Name" />
            </InputContainer>

            <InputContainer variant="outlined" fullWidth>
              <CustomInputLabel htmlFor="component-outlined">Password</CustomInputLabel>
              <Input type="password" id="component-outlined" label="Password" />
            </InputContainer>

            <LoginButtonContainer>
              <CustomButton variant="contained">
                Log In
              </CustomButton>
            </LoginButtonContainer>

              <ForgotPasswordAnchor>Forgot password?</ForgotPasswordAnchor>
          
        </FormContainer>
      </LoginContainer>

      <NoAccountContainer variant="outlined">
          <Subtitle>Don't have an account?</Subtitle>
          <NoAccountButton>Sign Up</NoAccountButton>
      </NoAccountContainer>
    </Container>
  );
};

export default LoginPage;
