import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FacebookIcon from "@material-ui/icons/Facebook";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import {
  Container,
  LoginContainer,
  FormContainer,
  Title,
  CustomButton,
  NoAccountContainer,
  Subtitle,
  NoAccountButton,
  ForgotPasswordAnchor,
  InputContainer,
} from "./login.styles";

const LoginPage = () => {
  const [userCredentials, setUserCredentials] = useState({email: '', password: ''});
  const [errorMessages, setErrorMessages] = useState({emailError: '', passwordError: ''});

  const { email, password} = userCredentials;
  const { emailError, passwordError } = errorMessages;

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({...userCredentials, [name]: value});
    setErrorMessages({emailError: '', passwordError:''});

    console.log(userCredentials);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    validateForm();

    console.log('event ', event);
    console.log(userCredentials);

  }

  const validateForm = () => {
    let valid = true;

    if (!email) {
      setErrorMessages({...errorMessages, emailError: 'Invalid email'});
      valid = false;
    }

    if (!password || password.length < 6) {
      setErrorMessages({...errorMessages, passwordError: 'Password must have at least 6 characters'});
      valid = false;
    }

    return valid;
  }

  return (
    <Container>
      <LoginContainer variant="outlined">
        <Title></Title>
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <TextField
              error={!!emailError}
              helperText={emailError}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={email}
              type="email"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </InputContainer>
          <InputContainer>
            <TextField
              error={!!passwordError}
              helperText={passwordError}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              name="password"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </InputContainer>

          <InputContainer>
            <CustomButton variant="contained" disabled={!email || !password} type="submit">Log In</CustomButton>
          </InputContainer>

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
