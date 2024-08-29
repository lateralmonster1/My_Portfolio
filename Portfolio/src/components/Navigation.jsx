// src/components/Navigation.jsx
function Navigation({ currentSection, setCurrentSection }) {
    const navItems = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];
  
    return (
      <nav>
        <ul>
          {navItems.map(item => (
            <li
              key={item}
              className={currentSection === item ? 'active' : ''}
              onClick={() => setCurrentSection(item)}
            >
              {item.replace(/([A-Z])/g, ' $1').trim()}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navigation;
  