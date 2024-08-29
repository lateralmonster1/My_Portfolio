// src/components/Header.jsx
import Navigation from './Navigation';

function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <h1>Xavier Leon</h1>
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </header>
  );
}

export default Header;
