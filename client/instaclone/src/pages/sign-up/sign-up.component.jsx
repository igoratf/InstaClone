import React, { useState } from "react";

import CustomButton from "../../components/custom-button/custom-button.component";
import {
  Container,
  SignUpContainer,
  Title,
  Subtitle,
  FormContainer,
  InputField,
  ButtonContainer,
  CardFooter,
  SecondaryCard
} from "./sign-up.styles";

import AnchorButton from '../../components/anchor-button/anchor-button.component';

import { theme } from '../../styles.config';
const { textField } = theme;

const SignUp = () => {  
  const [signUpForm, setSignUpForm] = useState({email: '', name: '', username: '', password: ''});
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { email, name, username, password } = signUpForm;

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setSignUpForm({...signUpForm, [name]: value});
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    validateSignUpForm();
  }

  const validateSignUpForm = () => {

    Object.keys(signUpForm).forEach(input => {
      if (input === "password" && signUpForm[input].length < 8) {
        setPasswordError('Must be at least 8 characters long');
      } else if (signUpForm[input].length < 4) {
        switch(input) {
          default:
            break;
          case "email":
            setEmailError('Invalid email');
            break;
          case "name":
            setNameError('Must be at least 4 characters long');
            break;
          case "username":
            setUsernameError('Must be at least 4 characters long');
            break;
        }
      }
    })
    
  }

  return (
    <Container>
      <SignUpContainer variant="outlined">
        <Title />
        <Subtitle>Sign up to see photos and videos from your friends.</Subtitle>

        <FormContainer onSubmit={handleSubmit}>
          <InputField
            error={!!emailError}
            helperText={emailError}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            value={email}
            required
            onChange={(e) => handleInputChange(e)}
            InputLabelProps={{style: textField}}
            inputProps={{style: textField}}
          />
          <InputField
            error={!!nameError}
            helperText={nameError}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            type="text"
            value={name}
            required
            onChange={(e) => handleInputChange(e)}
            InputLabelProps={{style: textField}}
            inputProps={{style: textField}}
          />
          <InputField
            error={!!usernameError}
            helperText={usernameError}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            fullWidth
            name="username"
            type="text"
            value={username}
            required
            onChange={(e) => handleInputChange(e)}
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
            name="password"
            type="password"
            value={password}
            required
            onChange={(e) => handleInputChange(e)}
            InputLabelProps={{style: textField}}
            inputProps={{style: textField}}
          />

          <ButtonContainer>
            <CustomButton disabled={!(email && name && username && password)} type="submit">Sign Up</CustomButton>
          </ButtonContainer>
        </FormContainer>

        <CardFooter>
            <span>By signing up, you agree to our <strong>Terms , Data Policy</strong> and <strong>Cookies Policy</strong> .</span>
        </CardFooter>
      </SignUpContainer>

      <SecondaryCard variant="outlined">
        Have an account? <AnchorButton to="/signin">Log in</AnchorButton>
      </SecondaryCard>
    </Container>
  );
};

export default SignUp;
