import React, { useState, useEffect } from 'react';

// Define types for the navigation items
interface NavItem {
  id: string;
  title: string;
  content: string;
}

const App: React.FC = () => {
  // State for storing navigation items and active content
  const [navItems, setNavItems] = useState<NavItem[]>([]); // Store navigation items
  const [activeContent, setActiveContent] = useState<string>(''); // Store selected content

  // Fetch data from AWS API Gateway
  useEffect(() => {
    fetch('https://rzojefkldd.execute-api.us-east-2.amazonaws.com/mystage') // Replace with your API Gateway URL
      .then(response => response.json())
      .then((data: NavItem[]) => setNavItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {/* Left Navigation Pane */}
      <nav style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px' }}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id} onClick={() => setActiveContent(item.content)}>
              {item.title}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <section style={{ padding: '20px' }}>
        <h1>Content</h1>
        <p>{activeContent}</p>
      </section>
    </div>
  );
};

export default App;
