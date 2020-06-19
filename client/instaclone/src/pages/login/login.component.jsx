import React from "react";

import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FacebookIcon from "@material-ui/icons/Facebook";

import {
  Container,
  LoginContainer,
  FormContainer,
  InputContainer,
  Title,
  Subtitle,
  Input,
  CustomButton
} from "./login.styles";

const LoginPage = () => {
  return (
    <Container>
      <div style={{ marginBottom: "50px" }}></div>
      <LoginContainer variant="outlined">
        <Title></Title>
        <Subtitle>Sign up to see photos and videos from your friends.</Subtitle>
        <Button
          variant="contained"
          color="primary"
          startIcon={<FacebookIcon />}
        >
          Login with Facebook
        </Button>
        <FormContainer>
          <div>
            <InputContainer variant="outlined" fullWidth>
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <Input id="component-outlined" label="Name" />
            </InputContainer>

            <InputContainer variant="outlined" fullWidth>
              <InputLabel htmlFor="component-outlined">Password</InputLabel>
              <Input type="password" id="component-outlined" label="Password" />
            </InputContainer>

            <div style={{padding: '8px', width: '100%'}}>
              <CustomButton variant="contained">
                Login
              </CustomButton>
            </div>
          </div>

          
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;
