import { Container, Description, SearchButton, WelcomeText } from "./styles";

const WelcomeSection = () => {
  return (
    <Container>
      <WelcomeText>ADOPT A FRIEND</WelcomeText>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        viverra, ex non semper egestas, odio nisi efficitur nulla, porta
        venenatis felis mi non augue. Ut porttitor tempus maximus. Duis
        fermentum dignissim velit convallis interdum. Fusce vel augue nisi.
        Maecenas turpis urna, volutpat a ligula lacinia, commodo pellentesque
        orci.
      </Description>
      <SearchButton to="/search">SEARCH</SearchButton>
    </Container>
  );
};

export default WelcomeSection;
