import {
  Container,
  LogoName,
  LoginButton,
  SignUpButton,
  MenuItem,
} from "./styles";

const Nav = ({ handleSignUp, handleLogin }) => {
  const isLogged = false;

  return (
    <Container>
      <div>
        <LogoName>PETLOVE</LogoName>
        {isLogged && <p>Welcome back, Pedro Wanderley!</p>}
      </div>
      <div>{isLogged && <MenuItem to="/my-pets">My Pets</MenuItem>}</div>
      <div>
        {isLogged ? (
          <>
            <MenuItem to="/my-pets">My Account </MenuItem>
            <LoginButton onClick={handleLogin}>LOGOUT</LoginButton>
          </>
        ) : (
          <>
            <LoginButton onClick={handleLogin}>LOGIN</LoginButton>
            <SignUpButton onClick={handleSignUp}>SIGNUP</SignUpButton>
          </>
        )}
      </div>
    </Container>
  );
};

export default Nav;
