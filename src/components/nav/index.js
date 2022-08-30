import { Container, LogoName, LoginButton, SignUpButton } from "./styles";

const Nav = ({ handleSignUp, handleLogin }) => {
  return (
    <Container>
      <LogoName>PETLOVE</LogoName>
      <div>
        <LoginButton onClick={handleLogin}>LOGIN</LoginButton>
        <SignUpButton onClick={handleSignUp}>SIGNUP</SignUpButton>
      </div>
    </Container>
  );
};

export default Nav;
