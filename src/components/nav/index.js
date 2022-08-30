import { Container, LogoName, LoginButton, SignUpButton } from "./styles";

const Nav = ({ handleSignUp }) => {
  return (
    <Container>
      <LogoName>PETLOVE</LogoName>
      <div>
        <LoginButton>LOGIN</LoginButton>
        <SignUpButton onClick={handleSignUp}>SIGNUP</SignUpButton>
      </div>
    </Container>
  );
};

export default Nav;
