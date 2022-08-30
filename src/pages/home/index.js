import { useState } from "react";

import Footer from "../../components/footer";
import LoginModal from "../../components/login-modal";
import Nav from "../../components/nav";
import SignUpModal from "../../components/signup-modal";
import WelcomeSection from "../../components/welcome-section";
import WhoWeAre from "../../components/who-we-are";
import GlobalStyle from "../../styles/global";

function Home() {
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  return (
    <div>
      {isLoginModalVisible && (
        <LoginModal onCloseLoginModal={() => setIsLoginModalVisible(false)} />
      )}
      {isSignUpModalVisible && (
        <SignUpModal
          onCloseSignUpModal={() => setIsSignUpModalVisible(false)}
        />
      )}
      <GlobalStyle />
      <Nav
        handleLogin={() => setIsLoginModalVisible(true)}
        handleSignUp={() => setIsSignUpModalVisible(true)}
      />
      <WelcomeSection />
      <WhoWeAre />
      <Footer />
    </div>
  );
}

export default Home;
