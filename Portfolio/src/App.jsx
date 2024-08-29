// src/App.jsx
import React, { useState } from 'react';
import './App.css';  // Import the component-specific CSS
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('AboutMe');

  const renderSection = () => {
    switch (currentSection) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </header>
      <main className="app-main">
        {renderSection()}
      </main>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
