import { CloseButton, Container, Input, SubmitButton } from "./styles";

const LoginModal = ({ onCloseLoginModal }) => {
  return (
    <Container>
      <p>Access Your Account</p>
      <CloseButton onClick={onCloseLoginModal}>X</CloseButton>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
      <SubmitButton>Login</SubmitButton>
    </Container>
  );
};

export default LoginModal;
