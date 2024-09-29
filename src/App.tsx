import { useEffect, useState } from "react";

// Define the main App component
const App = () => {
  // State to store which section is active
  const [activeSection, setActiveSection] = useState('home');

  // Function to render content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <p>Welcome to the Home section!</p>;
      case 'about':
        return <p>Learn more About us here.</p>;
      case 'services':
        return <p>Here are our Services.</p>;
      case 'contact':
        return <p>Contact us for more information.</p>;
      default:
        return <p>Welcome to the Home section!</p>;
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <h1>My Website</h1>
      </header>

      {/* Navigation */}
      <nav>
        <ul>
          <li onClick={() => setActiveSection('home')}>Home</li>
          <li onClick={() => setActiveSection('about')}>About</li>
          <li onClick={() => setActiveSection('services')}>Services</li>
          <li onClick={() => setActiveSection('contact')}>Contact</li>
        </ul>
      </nav>

      {/* Section */}
      <section>
        {renderContent()}
      </section>
    </div>
  );
};

export default App;
