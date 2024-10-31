import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import HeroSection from './components/hero';
import ExplainSection from './components/codeExplain';
import LastSection from './components/LastSection';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  const [isSignUpPage, setIsSignUpPage] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpPage(true);
  };

  return (
    <Router>
      <Header onSignUpClick={handleSignUpClick} isSignUpPage={isSignUpPage} />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ExplainSection />
            <LastSection />
            <Footer />
          </>
        } />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
