import React from "react";

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
  SecondaryCard,
  AnchorButton,
} from "./sign-up.styles";

const SignUp = () => {
  return (
    <Container>
      <SignUpContainer variant="outlined">
        <Title />
        <Subtitle>Sign up to see photos and videos from your friends.</Subtitle>

        <FormContainer>
          <InputField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            required
          />
          <InputField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            type="text"
            required
          />
          <InputField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            fullWidth
            name="username"
            type="text"
            required
          />
          <InputField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            name="password"
            type="password"
            required
          />

          <ButtonContainer>
            <CustomButton>Sign Up</CustomButton>
          </ButtonContainer>
        </FormContainer>

        <CardFooter>
            <span>By signing up, you agree to our <strong>Terms , Data Policy</strong> and <strong>Cookies Policy</strong> .</span>
        </CardFooter>
      </SignUpContainer>

      <SecondaryCard variant="outlined">
        Have an account? <AnchorButton>Log in</AnchorButton>
      </SecondaryCard>
    </Container>
  );
};

export default SignUp;
