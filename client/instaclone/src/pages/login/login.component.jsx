import React, { useState } from "react";

import CustomButton from "../../components/custom-button/custom-button.component";
import AnchorButton from "../../components/anchor-button/anchor-button.component";

import {
  Container,
  LoginContainer,
  FormContainer,
  Title,
  SecondaryCard,
  ButtonContainer,
  ForgotPasswordAnchor,
  InputField
} from "./login.styles";

import { theme } from '../../styles.config';
import { useHistory } from "react-router-dom";
const { textField } = theme;

const LoginPage = () => {
  const history = useHistory();
  const [userCredentials, setUserCredentials] = useState({email: '', password: ''});
  const [errorMessages, setErrorMessages] = useState({emailError: '', passwordError: ''});

  const { email, password} = userCredentials;
  const { emailError, passwordError } = errorMessages;

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({...userCredentials, [name]: value});
    setErrorMessages({emailError: '', passwordError:''});
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = validateForm();
    if (valid) {
      history.push('/feed');
    }

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
            <InputField
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
              InputLabelProps={{style: textField}}
              inputProps={{style: textField}}
            />
            <InputField
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
              InputLabelProps={{style: textField}}
              inputProps={{style: textField}}
            />
            
            <ButtonContainer>
              <CustomButton disabled={!email || !password} type="submit">Log In</CustomButton>
            </ButtonContainer>

          <ForgotPasswordAnchor>Forgot password?</ForgotPasswordAnchor>
        </FormContainer>
      </LoginContainer>

      <SecondaryCard variant="outlined">
        Don't have an account? <AnchorButton to="/signup">Sign Up</AnchorButton>
      </SecondaryCard>
    </Container>
  );
};

export default LoginPage;
