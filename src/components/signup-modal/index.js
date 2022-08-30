import { CloseButton, Container, Input, SubmitButton } from "./styles";

const SignUpModal = ({ onCloseSignUpModal }) => {
  return (
    <Container>
      <p>Be Part Of Our Community</p>
      <CloseButton onClick={onCloseSignUpModal}>X</CloseButton>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input placeholder="Phone number" />
      <SubmitButton>Register</SubmitButton>
    </Container>
  );
};

export default SignUpModal;
