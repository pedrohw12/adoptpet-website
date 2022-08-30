import { Container, LogoName, LoginButton, SignUpButton } from "./styles";

const Nav = () => {
  return (
    <Container>
      <LogoName>PETLOVE</LogoName>
      <div>
        <LoginButton>LOGIN</LoginButton>
        <SignUpButton>SIGNUP</SignUpButton>
      </div>
    </Container>
  );
};

export default Nav;
