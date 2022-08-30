import { useState } from "react";

import Footer from "./components/footer";
import Nav from "./components/nav";
import SignUpModal from "./components/signup-modal";
import WelcomeSection from "./components/welcome-section";
import WhoWeAre from "./components/who-we-are";
import GlobalStyle from "./styles/global";

function App() {
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  return (
    <div>
      {isSignUpModalVisible && (
        <SignUpModal
          onCloseSignUpModal={() => setIsSignUpModalVisible(false)}
        />
      )}
      <GlobalStyle />
      <Nav handleSignUp={() => setIsSignUpModalVisible(true)} />
      <WelcomeSection />
      <WhoWeAre />
      <Footer />
    </div>
  );
}

export default App;
